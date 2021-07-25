import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/footer.css';
import zzzleepy from '../images/zzzleepy-white.png';

class Footer extends Component {
    render () {
        return <footer >
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About Me</a></li>
                <li><a href="/work">My Work</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
            <p id="footerTxt" class="title is-7">
                Made with ❤️ by <span><img id="footerSign" src={zzzleepy} alt="zzzleepy" /></span>
                <br></br><span id="copyright">Copyright <span><FontAwesomeIcon icon={['far', 'copyright']} size="lg" /></span> 2021 Sean P. Weber</span>
            </p>
            <div id="icons">
                <a href="https://reactjs.org/" rel="noreferrer" target="_blank">
                    <FontAwesomeIcon icon={['fab', 'react']} size="2x" />
                </a>
                <a href="https://nodejs.org/en/" rel="noreferrer" target="_blank">
                    <FontAwesomeIcon icon={['fab', 'node-js']} size="2x" />
                </a>
                <a href="https://bulma.io/" rel="noreferrer" target="_blank">
                    <svg viewBox="0 0 24 24">
                        <path fill="currentColor" d="M11.38 2L6.38 7L5.13 15.75L11.38 22L18.88 17L13.88 12L17.63 8.25L11.38 2Z" />
                    </svg>
                </a>
            </div>
    </footer>
    }
};

export default Footer;