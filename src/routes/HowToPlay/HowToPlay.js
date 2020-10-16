import React, { Component } from 'react'
import Header from '../../components/Header/Header'
import './HowToPlay.css'

export default class HowToPlay extends Component {
    render() {
        return (
            <>
                <Header />
                <div className='how-to-play'>
                    <p>
                        TechFighter is a turn-based fighting game inspired by classic arcade games from the 80s and 90s. <br/> There are 6 different characters to choose from, all with their own fighting styles and attacks. <br/>Each character has 3 attacks:</p><h4>Light(L) Medium(M) Special(S)</h4><p>Each attack deals a certain amount of damage and costs a certain amount of stamina. Each fighter also has the option to Defend(D), which restores a small amount of health and stamina. After the player attacks, the computer generated opponent will perform a random attack(or defend) and the match will continue until either the player or computer's health reaches 0.
                </p>
                </div>
            </>
        )
    }
}