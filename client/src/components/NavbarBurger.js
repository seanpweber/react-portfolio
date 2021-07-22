import React, { Component } from 'react';
import '../styles/navbar.css';

class NavbarBurger extends Component {
    render () {
        return <div class="box">
            <ul>
                <li>About</li>
                <li>Work</li>
                <li>Contact</li>
            </ul>
        </div>
    }
}

export default NavbarBurger;