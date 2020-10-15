import React, { Component } from 'react'
import FighterContext from '../../context/FighterContext'
import FighterApiService from '../../services/fighter-api-service'
import Header from '../../components/Header/Header'
import { Section } from '../../components/Utils/Utils'
import Fighter from '../../components/Fighter/Fighter'
import './Contestants.css'

export default class Contestants extends Component {
    static contextType = FighterContext

    state = {
        loading: true
    }

    componentDidMount() {
        let _contestants;
        this.context.clearError()
        FighterApiService.getContestants()
            .then(contestants => {
                _contestants = contestants;
                return Promise.all(contestants.map(contestant => FighterApiService.getFightingStyle(contestant.styleid)))
            })
            .then(fightingStyles => {
                _contestants.forEach((contestant, index) => {
                    contestant.fightingStyle = fightingStyles[index];
                })
                this.context.setContestants(_contestants);
                this.setState({ loading: false })
            })
            .catch(this.context.setError)
    }

    renderContestants() {
        const { contestants = [] } = this.context
        return contestants.map(fighter =>
            <Fighter
                key={fighter.id}
                fighter={fighter}
            />
        )

    }

    render() {
        const { error } = this.context
        const { loading } = this.state
        return (<>
            <header className='App_header'>
                <Header />
            </header>
            <h2 className='player-select'>Choose Your Fighter</h2>
            {loading ? <p className='loading'>LOADING...</p> : <Section className='Contestants'>
                {error
                    ? <p className='red'>There was an error, try again</p>
                    : this.renderContestants()}
            </Section>}
        </>
        )
    }
}