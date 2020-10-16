import React, { Component } from 'react'
import FighterContext from '../../context/FighterContext'
import FighterApiService from '../../services/fighter-api-service'
import { Section } from '../../components/Utils/Utils'
import Header from '../../components/Header/Header'
import Versus from '../../components/Versus/Versus'
import './FightPage.css'

export default class FightPage extends Component {
    static contextType = FighterContext

    state = {
        loading: true
    }

    componentDidMount() {
        let _fighter;
        let _opponent;
        this.context.clearError()
        FighterApiService.getOpponent(this.props.match.params.id)
            .then(opponent => {
                _opponent = opponent
                return FighterApiService.getFightingStyle(opponent.styleid)
            })
            .then(fightingStyle => {
                _opponent.fightingStyle = fightingStyle
                this.context.setOpponent(_opponent)
            })
        FighterApiService.getFighter(this.props.match.params.id)
            .then(fighter => {
                _fighter = fighter
                return FighterApiService.getFightingStyle(fighter.styleid)
            })
            .then(fightingStyle => {
                _fighter.fightingStyle = fightingStyle
                this.context.setFighter(_fighter)
                this.setState({loading: false})
            })


            .catch(this.context.setError)
    }

    renderOpponent() {
        const { opponent, fighter } = this.context
        return <Versus
            opponent={opponent}
            fighter={fighter}
            {...this.props}
        />
    }

    render() {
        const { error } = this.context
        const { loading } = this.state
        return (
            <>
                <header className='App_header'>
                    <Header />
                </header>

                {loading ? <p className='loading'>LOADING...</p> :
                    <Section list className='Opponent'>
                        {error
                            ? <p className='red'>There was an error, try again</p>
                            : this.renderOpponent()}
                    </Section>}
            </>
        )
    }
}