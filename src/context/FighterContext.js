import { isThisWeek } from 'date-fns';
import React, { Component } from 'react'

const FighterContext = React.createContext({
  contestants: [],
  fighter: {
    health: null,
    stamina: null,
    speed: null,
    fightingStyle: {
      attacks: []
    }
  },
  opponent: {
    health: null,
    stamina: null,
    speed: null,
    fightingStyle: {
      attacks: []
    }
  },
  user: null,
  error: null,
  setError: () => { },
  clearError: () => { },
  setContestants: () => { },
  setFighter: () => { },
  setOpponent: () => { },
  setUser: () => { },
})

export default FighterContext

export class FighterProvider extends Component {
  state = {
    contestants: [],
    fighter: {
      health: null,
      stamina: null,
      speed: null,
      fightingStyle: {
        attacks: []
      }
    },
    opponent: {
      health: null,
      stamina: null,
      speed: null,
      fightingStyle: {
        attacks: []
      }
    },
    user: null,
    error: null,
  };

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  setContestants = contestants => {
    this.setState({ contestants })
  }

  setFighter = fighter => {
    this.setState({ fighter })
  }

  setOpponent = opponent => {
    this.setState({ opponent })
  }

  setUser = user => {
    this.setState({ user })
  }

  setHealth = health => {
    const opponent = this.state.opponent
    opponent.health = health
    this.setState({ opponent })
  }

  resetHealth = health => {
    health = 100
    const fighter = this.state.fighter
    const opponent = this.state.opponent
    opponent.health = health
    fighter.health = health
    this.setState({ fighter, opponent })
  }

  setStamina = stamina => {
    const fighter = this.state.fighter
    fighter.stamina = stamina
    this.setState({ fighter })
  }


  render() {
    const value = {
      contestants: this.state.contestants,
      fighter: this.state.fighter,
      opponent: this.state.opponent,
      user: this.state.user,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setContestants: this.setContestants,
      setFighter: this.setFighter,
      setOpponent: this.setOpponent,
      setUser: this.setUser,
      setHealth: this.setHealth,
      setStamina: this.setStamina,
      resetHealth: this.resetHealth
    }
    return (
      <FighterContext.Provider value={value}>
        {this.props.children}
      </FighterContext.Provider>
    )
  }
}
