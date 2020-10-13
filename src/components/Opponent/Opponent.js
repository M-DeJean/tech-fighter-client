import React, { Component } from 'react'
import FighterContext from '../../context/FighterContext'
import FighterApiService from '../../services/fighter-api-service'

export default class Opponent extends Component {

    static contextType = FighterContext

    componentDidUpdate() {
        const { opponent, fighter } = this.context
        if (fighter.health <= 0 || opponent.health <= 0) {
            alert('GAME OVER')
            this.context.resetHealth()
            this.props.history.push('/')
        }
    }

    executeAttack = (e) => {
        const { opponent, fighter } = this.context
        const atk = e.target.value
        const stm = e.target.dataset.stamina
        const oppAtk = opponent.fightingStyle.attacks[Math.floor(Math.random() * opponent.fightingStyle.attacks.length)]
        console.log('OPPATK', oppAtk)
        if (fighter.health > 0) {
            opponent.health = opponent.health - atk
            fighter.stamina = fighter.stamina - stm
        }
        if (opponent.health > 0 ) {
            fighter.health = fighter.health - oppAtk.damage
            opponent.stamina = opponent.stamina - oppAtk.stamina
        }
        this.context.setHealth(opponent.health)
        this.context.setStamina(fighter.stamina)
    }

    render() {
        const { opponent, fighter } = this.context
        if (fighter) {
            return (
                <div>
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
                                <button data-stamina={attack.energy_cost} value={attack.damage} onClick={this.executeAttack}>{attack.attack_name}</button>
                                <p> DMG: {attack.damage}</p>
                                <p> NRG: {attack.energy_cost}</p>
                            </div>)}
                    </div>
                </div>
            )
        } else {
            return (
                <h3>LOADING...</h3>
            )
        }
    }
}