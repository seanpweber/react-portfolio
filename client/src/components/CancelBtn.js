import React, { Component } from 'react';
import '../index.css';

class CancelBtn extends Component {
    render () {
        return <button type="reset" id="cancelBtn" class="button is-info is-light">Cancel</button>
    }
}

export default CancelBtn;