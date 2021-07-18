import React, { Component } from 'react';
import '../index.css';

class BodyImg extends Component {
    render () {
        return <div><img id={this.props.id} alt={this.props.alt} /></div>
    }
}

export default BodyImg;
