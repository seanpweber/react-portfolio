import React, { Component } from 'react';
import '../index.css';
import computer from '../images/computer.jpg'

class BodyImg extends Component {
    render () {
        return <div><img src={computer} alt={this.props.alt} /></div>
    }
}

export default BodyImg;
