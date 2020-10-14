import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Fighter extends Component {


    render() {
        const { fighter } = this.props
        return (
            <ul>
                <p>
                    name: {fighter.fighter_name}<br />
                city: {fighter.hometown}<br />
                Fighting Style: {fighter.fightingStyle.style_name} <br />
                Record: {fighter.wins} - {fighter.losses} <br />
                    <Link to={`/contestants/${fighter.id}/fight-page`}>select fighter</Link>
                </p>
            </ul>
        )
    }
}