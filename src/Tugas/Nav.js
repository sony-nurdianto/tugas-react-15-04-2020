import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Nav extends Component {
    render() {
        return (
            <ul className="nav">
                <li className="nav-item">
                    <Link to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/Data">show</Link>
                </li>
            </ul>
        )
    }
}
