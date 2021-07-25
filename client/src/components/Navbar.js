import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/navbar.css';
import burger from '../scripts/burger';
// import zzzleepy from '../images/zzzleepy-dev-white.png';

document.addEventListener('DOMContentLoaded', burger);

class Navbar extends Component {
    render () {
        return <div id="navContainer">
            <nav id="navbar" class="navbar is-fixed-top is-dark" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a id="navlogo" class="navbar-item" href="/">
                    <h5 class="title is-5">S/W</h5>
                </a>
                <a role="button" id="navBurger" class="navbar-burger" data-target="navMenu" aria-label="menu" aria-expanded="false">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div id="navMenu" class="navbar-menu is-active">
                <div class="navbar-end ">
                    <a class="navbar-item is-hoverable" href="/about">
                        About Me
                    </a>
                    <a class="navbar-item is-hoverable" href="/work">
                        My Work
                    </a>
                    <div class="navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link" href="/contact">
                            Contact Me
                        </a>

                        <div class="navbar-dropdown">
                            <a class="navbar-item dropdownLink" href="/contact/email">
                                <FontAwesomeIcon icon="envelope-square" size="lg" />
                                <p>Email</p>
                            </a>
                            <a class="navbar-item dropdownLink" href="https://github.com/seanpweber" rel="noreferrer" target="_blank">
                                <FontAwesomeIcon icon={['fab', 'github']} size="lg" />
                                <p>Github</p>
                            </a>
                            <a class="navbar-item dropdownLink" href="https://www.linkedin.com/in/sean-weber-7965b9113/" rel="noreferrer" target="_blank">
                                <FontAwesomeIcon icon={['fab', 'linkedin']} size="lg" />
                                <p>LinkedIn</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>
    }
};

export default Navbar;