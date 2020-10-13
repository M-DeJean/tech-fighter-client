import React, { Component } from 'react'
import FighterContext from '../../context/FighterContext'
import FighterApiService from '../../services/fighter-api-service'
import { Section } from '../../components/Utils/Utils'
import Opponent from '../../components/Opponent/Opponent'

export default class FightPage extends Component {
    static contextType = FighterContext

    state = {
        round: 1
    }

    newRound = () => {
        if(this.state.round === 5) {
            
        }
        this.setState({ round: this.state.round + 1 })
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
            })


            .catch(this.context.setError)
    }

    renderOpponent() {
        const { opponent, fighter } = this.context
        return <Opponent
            newRound={this.newRound}
            opponent={opponent}
            fighter={fighter}
            {...this.props}
        />
    }

    render() {
        const { error } = this.context
        return (
            <Section list className='Opponent'>
                <h2>Round {this.state.round}</h2>
                {error
                    ? <p className='red'>There was an error, try again</p>
                    : this.renderOpponent()}
            </Section>
        )
    }
}