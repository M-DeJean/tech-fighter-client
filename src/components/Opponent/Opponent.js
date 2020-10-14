import React, { Component } from 'react'
import FighterContext from '../../context/FighterContext'
import { Link } from 'react-router-dom'

import FighterApiService from '../../services/fighter-api-service'

export default class Opponent extends Component {

    state = {
        message: null,
        opponentMessage: null,
        endGame: false
    }

    static contextType = FighterContext

    executeAttack = (e) => {
        const { opponent, fighter } = this.context
        const atk = e.target.value
        const stm = e.target.dataset.stamina
        const oppAtk = opponent.fightingStyle.attacks[Math.floor(Math.random() * opponent.fightingStyle.attacks.length)]
        console.log('OPPATK', oppAtk)
        if (fighter.health > 0) {
            opponent.health = opponent.health - atk
            fighter.stamina = fighter.stamina - stm
            this.context.setHealth(opponent.health)
            this.context.setStamina(fighter.stamina)
            this.setState({
                opponentMessage: "Watiting for Opponent",
                message: `${fighter.fighter_name} landed a ${e.target.name} on ${opponent.fighter_name}`
            })
        } else {
            this.setState({ endGame: true })
        }
        setTimeout(() => {
            if (opponent.health > 0) {
                fighter.health = fighter.health - oppAtk.damage
                opponent.stamina = opponent.stamina - oppAtk.energy_cost
                this.context.setFighterHealth(fighter.health)
                this.context.setOpponentStamina(opponent.stamina)
                this.setState({ opponentMessage: `${opponent.fighter_name} landed a ${oppAtk.attack_name} on ${fighter.fighter_name}` })
            } else {
                this.setState({ endGame: true })
            }
        }, 2000)



    }

    render() {
        const { opponent, fighter } = this.context
        return (
            <div>
                {this.state.message ? (<div className='attack-message'>
                    <h4>{this.state.message}</h4>
                    <h4>{this.state.opponentMessage}</h4>
                </div>) : null}

                {this.state.endGame ? (
                    <div>
                        <h4>GAME OVER</h4>
                        <Link to={'/'}>Results</Link>
                    </div>) : null}


                <h3>{fighter.fighter_name} VS. {opponent.fighter_name}</h3>
                <div className='fighter-status'>
                    <div className='my-status'>
                        <h4>You</h4>
                        <h3>HEALTH: {fighter.health}</h3>
                        <h3>STAMINA: {fighter.stamina}</h3>
                    </div>
                    <div className='enemy-status'>
                        <h4>Enemy</h4>
                        <h3>HEALTH: {opponent.health}</h3>
                        <h3>STAMINA: {opponent.stamina}</h3>
                    </div>
                </div>

                <div className='AttackButton'>
                    {fighter.fightingStyle.attacks.map(attack =>
                        <div key={attack.id}>
                            <button disabled={attack.energy_cost >= fighter.stamina} name={attack.attack_name} data-stamina={attack.energy_cost} value={attack.damage} onClick={this.executeAttack}>{attack.attack_name}</button>
                            <p> DMG: {attack.damage}</p>
                            <p> NRG: {attack.energy_cost}</p>
                        </div>)}
                </div>
            </div>
        )
    }
}