import React, { Component } from 'react';
import '../index.css';

class Anchor extends Component {
    render () {
        return <a name={this.props.name} />
    }
}

export default Anchor;