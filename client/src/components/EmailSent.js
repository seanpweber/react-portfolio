import React, { Component } from 'react';
import '../index.css';

class EmailSent extends Component {
    render () {
        if (!this.props.show) {
            return null;
        }

        return <div class="modal">
            <div class="modal-background"></div>
            <div class="modal-content">
                <div class="box">
                    <h5 class="title is-5">Thank you! Your message has been sent!</h5>
                </div>
            </div>
            <button class="modal-close is-large" aria-label="close"></button>
        </div>
    }
}

export default EmailSent;