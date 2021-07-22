import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/contact.css';



class Contact extends Component {
    render () {
        return <div  id="contact">
            <div id="shake">
                <FontAwesomeIcon icon={['far', 'handshake']} size="5x" />
            </div>
            <div id="contactPara">
                <h5 class="title is-4">
                    Have an idea or want to inquire about my work? I'd be happy to get in touch.
                </h5>
                <h6 class="title is-6">
                    I can be reached at any of the links below:
                </h6>
            </div>
            <div id="linksBox">
                <div id="links">
                    <a href="/contact/email">
                        <div class="box" id="contactTab">
                            <div><FontAwesomeIcon icon="envelope-square" size="2x" /></div>
                            <p class="title is-4">Email</p>
                        </div>
                    </a>
                    <a href="https://github.com/seanpweber">
                        <div class="box" id="contactTab">
                            <div><FontAwesomeIcon icon={['fab', 'github']} size="2x" /></div>
                            <p class="title is-4">Github</p>
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/in/sean-weber-7965b9113/">
                        <div class="box" id="contactTab">
                            <div><FontAwesomeIcon icon={['fab', 'linkedin']} size="2x" /></div>
                            <p class="title is-4">LinkedIn</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    }
}

export default Contact;