import React, { Component } from 'react';
import '../index.css';

class SendBtn extends Component {
    render () {
        return <button type="submit" id="sendBtn" class="button is-info is-pulled-right">Send</button>
    }
}

export default SendBtn;