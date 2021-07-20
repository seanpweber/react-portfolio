import React, { Component } from 'react';
import '../index.css';
import zzzleepy from '../images/zzzleepy-white.png';

class Footer extends Component {
    render () {
        return <footer class="footer">
        <div class="content has-text-centered">
            <p class="title is-7">
                Made with ❤️ by <span><img id="footerSign" src={zzzleepy} alt="zzzleepy" /></span>
            </p>
        </div>
    </footer>
    }
};

export default Footer;