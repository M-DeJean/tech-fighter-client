import React, { Component } from 'react';
import FighterContext from '../../context/FighterContext'
import FighterApiService from '../../services/fighter-api-service'
import Header from '../../components/Header/Header'
import './Statistics.css'

export default class Statistics extends Component {
    static contextType = FighterContext

    state = {
        loading: true,
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

    renderStatistics() {
        const { expand } = this.state
        const { contestants = [] } = this.context
        return contestants.map(fighter =>
            <div key={fighter.id} className='statistics'>
                <div className='name'><img src={fighter.image}></img>
                    <h3>{fighter.fighter_name}</h3></div>

                <div className='info'>
                    <p>Born: {fighter.hometown}</p>
                    <p>Record: {fighter.wins} - {fighter.losses}</p>
                    <p>Style: {fighter.fightingStyle.style_name}</p>
                </div>

            </div>
        )

    }
    render() {
        const { loading } = this.state
        return (
            <>
                <header className='App_header'>
                    <Header />
                </header>
                <div className='stats'>


                    {loading ? <p className='loading'>LOADING...</p> : this.renderStatistics()}

                </div>
            </>
        )
    }
}
