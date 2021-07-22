import React, { Component, useState } from 'react';
import * as emailjs from 'emailjs-com';
import EmailSent from './EmailSent';
import SendBtn from './SendBtn';
import '../styles/contact.css'

class Email extends Component {
    state = {
        name: '',
        email: '',
        subject: '',
        message: ''
    }
    
    handleChange = (param, event) => {
        this.setState({ [param]: event.target.value })
    }
    
    handleSend() {
        const { name, email, subject, message } = this.state
        if (name === '' || email === '' || subject === '' || message === '') {
            alert("Please complete the form!");
            return;
        } else {
            let templateParams = {
                name: name,
                email: email,
                to_name: 'Sean',
                subject: subject,
                message: message,
            }

            emailjs.send(
                'my_dev_gmail',
                'template_j6ztv0i',
                templateParams,
                'user_e2SBprNH4w0Ma1Ze0RS4r'
            )

            this.showModal();
            this.resetForm();
        }
    }

    resetForm() {
        this.setState({
            name: '',
            email: '',
            subject: '',
            message: '',
        })
    }

    showModal() {
        //sets element to be manipulated as #emailSent
        var myID = document.getElementById("emailSent");
    
        //shows modal
        myID.style.display = "block";
    }

    handleSubmit(event) {
        event.preventDefault();
        this.handleSend();
    }

    render () {


        return <div>
                <div class="box" id="contactMe">
                <p class="title is-3">Contact Me</p>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div class="field">
                        <label class="label">Name</label>
                        <div class="control">
                        <input class="input" type="text" name="name" placeholder="e.g. Johnny Appleseed" value={this.state.name} onChange={this.handleChange.bind(this, 'name')} />
                        </div>
                    </div>
                    
                    <div class="field">
                        <label class="label">Email</label>
                        <div class="control">
                            <input class="input" type="email" name="email" placeholder="e.g. averycoolperson@email.com" value={this.state.email} onChange={this.handleChange.bind(this, 'email')} />
                        </div>
                    </div>
                    
                    <div class="field">
                        <label class="label">Subject</label>
                        <div class="control">
                        <input class="input" type="text" name="subject" placeholder="e.g. I would like to offer you a million dollars!" value={this.state.subject} onChange={this.handleChange.bind(this, 'subject')} />
                        </div>
                    </div>
                    
                    <div class="field">
                        <label class="label">Message</label>
                        <div class="control">
                            <textarea class="textarea" name="message" placeholder="" value={this.state.message} onChange={this.handleChange.bind(this, 'message')} />
                        </div>
                    </div>
                    
                    <div class="buttons is-grouped is-justify-content-flex-end">
                        <SendBtn />
                        {/* <CancelBtn /> */}
                    </div>
                </form>
            </div>

            <EmailSent />
        </div>
    }
}

export default Email;