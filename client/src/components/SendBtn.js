import React, { Component } from 'react';
import '../styles/sendBtn.css';

class SendBtn extends Component {
    render () {
        return <button type="submit" id="sendBtn" class="button is-pulled-right">Send</button>
    }
}

export default SendBtn;