import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './MainMenu.css'

export default class MainMenu extends Component {
    render() {
        return (
            <div className='MainMenu'>
            <h3>Main Menu</h3>
            <Link to='/contestants'>
                FIGHT
            </Link>
            </div>
        )
    }
}