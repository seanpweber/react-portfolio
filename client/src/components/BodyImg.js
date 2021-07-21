import React, { Component } from 'react';
import headshot from '../images/headshot-square.jpg'

class BodyImg extends Component {
    render () {
        return <div id="bodyImage"><img src={headshot} alt={this.props.alt} /></div>
    }
}

export default BodyImg;