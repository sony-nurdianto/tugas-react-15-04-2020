import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
export default class Nav extends Component {
    render() {
        return (
            <ul className="nav nav-pills">
                <li className="nav-item">
                    <Link className="nav-link active" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/Data">show</Link>
                </li>
            </ul>
        )
    }
}
