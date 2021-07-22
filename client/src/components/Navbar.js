import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/navbar.css';
import zzzleepy from '../images/zzzleepy-dev-white.png';

class Navbar extends Component {
    render () {
        return <nav id="navbar" class="navbar is-fixed-top is-dark" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a id="navlogo" class="navbar-item" href="/">
                <h5 class="title is-5">Hello World!</h5>
            </a>
            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div class="navbar-end is-hidden-touch">
            <a class="navbar-item is-hoverable" href="/about">
                About Me
            </a>
            <a class="navbar-item is-hoverable" href="/work">
                Work
            </a>
            <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link" href="/contact">
                    Contact Me
                </a>

                <div class="navbar-dropdown">
                    <a class="navbar-item dropdownLink" href="/contact/email">
                        Email
                        <div><FontAwesomeIcon icon="envelope-square" size="lg" /></div>
                    </a>
                    <a class="navbar-item dropdownLink" href="https://github.com/seanpweber" rel="noreferrer" target="_blank">
                        Github
                        <div><FontAwesomeIcon icon={['fab', 'github']} size="lg" /></div>
                    </a>
                    <a class="navbar-item dropdownLink" href="https://www.linkedin.com/in/sean-weber-7965b9113/" rel="noreferrer" target="_blank">
                        LinkedIn
                        <div><FontAwesomeIcon icon={['fab', 'linkedin']} size="lg" /></div>
                    </a>
                </div>
            </div>
        </div>
    </nav>
    }
};

export default Navbar;