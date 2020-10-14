import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './MainMenu.css'

export default class MainMenu extends Component {
    render() {
        return (
            <div className='MainMenu'>
                <h2>Main Menu</h2>
                <ul>
                    <li>
                        <Link to='/contestants'>
                            GAME START
                        </Link>
                    </li>
                    <li>
                        <h4>STATISTICS</h4>
                    </li>

                </ul>
            </div>
        )
    }
}