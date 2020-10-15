import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Fighter.css'
export default class Fighter extends Component {


    render() {
        const { fighter } = this.props
        return (
            <li className='fighter'>
                <p>
                    <Link to={`/contestants/${fighter.id}/fight-page`}><img src={fighter.image}></img></Link>
                </p>
            </li>
        )
    }
}