import React, { Component } from 'react';
import '../styles/footer.css';
import zzzleepy from '../images/zzzleepy-white.png';

class Footer extends Component {
    render () {
        return <footer >
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/work">Work</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
            <p id="footerTxt" class="title is-7">
                Made with ❤️ by <span><img id="footerSign" src={zzzleepy} alt="zzzleepy" /></span>
                <br></br><span id="copyright">Copyright (c) 2021 Sean P. Weber</span>
            </p>
    </footer>
    }
};

export default Footer;