import React, { Component } from 'react';
import '../index.css';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }

    render () {
        return <div class="box" id="contactMe">
            <h3 class="title is-3">Contact Me</h3>
            <form onSubmit={this.handleSubmit}>
                <div class="field">
                    <label class="label">Name</label>
                    <div class="control">
                    <input class="input" type="text" name="name" placeholder="e.g. Johnny Appleseed" value={this.state.value} onChange={this.handleChange} />
                    </div>
                </div>
                
                <div class="field">
                    <label class="label">Email</label>
                    <div class="control">
                        <input class="input" type="email" name="email" placeholder="e.g. averycoolperson@email.com" value={this.state.value} onChange={this.handleChange} />
                    </div>
                </div>
                
                <div class="field">
                    <label class="label">Subject</label>
                    <div class="control">
                    <input class="input" type="text" name="subject" placeholder="e.g. I would like to offer you a million dollars!" value={this.state.value} onChange={this.handleChange} />
                    </div>
                </div>
                
                <div class="field">
                    <label class="label">Message</label>
                    <div class="control">
                        <textarea class="textarea" name="message" placeholder="" value={this.state.value} onChange={this.handleChange} />
                    </div>
                </div>
                
                <div class="field is-grouped">
                    <div class="control">
                        {this.props.send}
                    </div>
                    <div class="control">
                        {this.props.cancel}
                    </div>
                </div>
            </form>
        </div>
    }
}

export default Contact;