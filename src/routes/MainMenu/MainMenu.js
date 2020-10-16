import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './MainMenu.css'

export default class MainMenu extends Component {
    render() {
        return (
            <>
                <div className='title'>
                    <h1>TECH</h1>
                    <h1>FIGHTER</h1>
                </div>
                <div className='MainMenu'>
                    <h2>Main Menu</h2>
                    <ul>
                        <li>
                            <Link to='/contestants'>
                                GAME START
                            </Link>
                        </li>
                        <li>
                            <Link to='/statistics'>
                                STATISTICS
                            </Link>
                        </li>
                        <li>
                            <Link to='/how-to-play'>
                                HOW TO PLAY
                            </Link>
                        </li>

                    </ul>
                </div>
            </>
        )
    }
}