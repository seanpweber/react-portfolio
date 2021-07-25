import React, { Component } from 'react';
import headshot from '../images/headshot-square.jpg';

class Headshot extends Component {
    render () {
        return <div id="headshotBox"><img id="headshotImg" src={headshot} alt={this.props.alt} /></div>
    }
}

export default Headshot;