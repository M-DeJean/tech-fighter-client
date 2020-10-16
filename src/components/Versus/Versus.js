import React, { Component } from 'react'
import FighterContext from '../../context/FighterContext'
import { Link } from 'react-router-dom'
import FighterApiService from '../../services/fighter-api-service'
import './Versus.css'

export default class Versus extends Component {

    state = {
        message: null,
        opponentMessage: null,
        iWin: false,
        iLose: false
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
            this.setState({ iLose: true })
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
                this.setState({ iWin: true })
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
                {this.state.iWin ? (
                    <div className='endgame'>
                        <h4 >YOU WIN</h4>
                        <div className='endgame-message'>
                            <img src={fighter.image}></img>
                        </div>
                        <Link to={'/'}>Main Menu</Link> <br/>
                        <Link to={'/contestants'}>Player Select</Link>
                    </div>) : this.state.iLose ? (<div className='endgame'>
                        <h4>YOU LOSE</h4>
                        <div className='endgame-message'>
                            <img src={opponent.image}></img>
                        </div>
                        <Link to={'/'}>Main Menu</Link> <br/>
                        <Link to={'/contestants'}>Player Select</Link>
                    </div>) :
                        <>

                            <div className='faceoff'>
                                <img src={fighter.image}></img> <p>VS.</p> <img src={opponent.image}></img>
                            </div>

                            <div className='fighter-status'>
                                <div className='my-status'>
                                    <h4>{fighter.fighter_name}</h4>
                                    <h5>LIFE:</h5> <span>{fighter.health}</span>
                                    <h5>STM:</h5> <span>{fighter.stamina}</span>
                                </div>
                                <div className='enemy-status'>
                                    <h4>{opponent.fighter_name}</h4>
                                    <h5>LIFE:</h5> <span>{opponent.health}</span>
                                    <h5>STM:</h5> <span>{opponent.stamina}</span>
                                </div>
                            </div>

                            {this.state.message ? (<div className='attack-message'>
                                <p className='message'>{this.state.message}</p>
                                <p className='opponent-message'>{this.state.opponentMessage}</p>
                            </div>) : null}

                            <div className='Attacks'>
                                <p>Choose an  attack</p>
                                {fighter.fightingStyle.attacks.map(attack =>
                                    <div className='attack-button' key={attack.id}>
                                        <button disabled={fighter.stamina < attack.energy_cost} name={attack.attack_name} data-stamina={attack.energy_cost} value={attack.damage} onClick={this.executeAttack}>{attack.button}</button>
                                    </div>)}
                            </div>
                        </>}
            </div>
        )
    }
}