import React, { Component, PureComponent } from 'react'
import FighterContext from '../../context/FighterContext'
import { Link } from 'react-router-dom'
import FighterApiService from '../../services/fighter-api-service'
import './Opponent.css'

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
        const min = 0;
        const availableAtks = opponent.fightingStyle.attacks.filter(attack => attack.energy_cost <= opponent.stamina)
        const oppAtk = availableAtks[Math.floor(Math.random() * availableAtks.length)]
        console.log(e.target.name, oppAtk)
        if (fighter.health > 0) {
            if (e.target.name === "Defend") {
                fighter.health += 5
                fighter.stamina += 20
                this.context.setFighterHealth(fighter.health)
                this.context.setStamina(fighter.stamina)
                this.setState({
                    message: `${fighter.fighter_name} is defending!`,
                    opponentMessage: '...'
                })
            } else {
                opponent.health = opponent.health - atk
                if (opponent.health < min) {
                    opponent.health = min
                }
                fighter.stamina = fighter.stamina - stm
                if (fighter.stamina < min) {
                    fighter.stamina = min
                }
                this.context.setHealth(opponent.health)
                this.context.setStamina(fighter.stamina)
                this.setState({
                    opponentMessage: "...",
                    message: `${fighter.fighter_name} landed a ${e.target.name} on ${opponent.fighter_name}!`
                })
            }
        } else {
            this.setState({ endGame: true })
            FighterApiService.gameOver(fighter.id, false)
            FighterApiService.gameOver(opponent.id, true)
            return
        }
        setTimeout(() => {
            if (opponent.health > 0) {
                if (oppAtk.attack_name === 'Defend') {
                    opponent.health += 5
                    opponent.stamina += 20
                    this.context.setHealth(opponent.health)
                    this.context.setOpponentStamina(opponent.stamina)
                    this.setState({
                        opponentMessage: `${opponent.fighter_name} is defending!`,
                        message: '...'
                    })

                } else {
                    fighter.health = fighter.health - oppAtk.damage
                    if (fighter.health < min) {
                        fighter.health = min
                    }
                    opponent.stamina = opponent.stamina - oppAtk.energy_cost
                    if (opponent.stamina < min) {
                        opponent.stamina = min
                    }
                    this.context.setFighterHealth(fighter.health)
                    this.context.setOpponentStamina(opponent.stamina)
                    this.setState({
                        opponentMessage: `${opponent.fighter_name} landed a ${oppAtk.attack_name} on ${fighter.fighter_name}!`,
                        message: '...'
                    })
                }

            } else {
                this.setState({ endGame: true })
                FighterApiService.gameOver(fighter.id, true)
                FighterApiService.gameOver(opponent.id, false)
                return
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

                {this.state.endGame ? (
                    <div>
                        <h4>GAME OVER</h4>
                        <Link to={'/'}>Results</Link>
                    </div>) :
                    <div className='Attacks'>
                        {fighter.fightingStyle.attacks.map(attack =>
                            <div className='attack-button' key={attack.id}>
                                <button name={attack.attack_name} data-stamina={attack.energy_cost} value={attack.damage} onClick={this.executeAttack}>{attack.attack_name}</button>
                            </div>)}
                    </div>}
            </div>
        )
    }
}