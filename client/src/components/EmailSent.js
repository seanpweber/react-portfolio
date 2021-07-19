import React, { Component } from 'react';

class EmailSent extends Component {
    hideModal() {

        //sets element to be manipulated as #emailSent
        var myID = document.getElementById("emailSent");
    
        //hides modal
        myID.style.display = "none";
    };

    render () {
        return <div id="emailSent" class="modal">
            <div class="modal-background" onClick={this.hideModal}></div>
            <div class="modal-content">
                <div class="box">
                    <h5 class="title is-5">Thank you! Your message has been sent!</h5>
                </div>
            </div>
            <button class="modal-close is-large" aria-label="close" onClick={this.hideModal}></button>
        </div>
    }
}

export default EmailSent;