import React, { Component } from 'react';
import '../index.css';

class Footer extends Component {
    render () {
        return <footer class="footer">
        <div class="content has-text-centered">
            <p class="title is-7">Made with ❤️️ by Sean Weber
                <br></br><span id="credit">Images courtesy of </span>
                <a id="credit" href="https://www.pexels.com" rel="noreferrer" target="_blank">Pexels.com</a>
            </p>
        </div>
    </footer>
    }
};

export default Footer;