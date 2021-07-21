import React, { Component } from 'react';

class Anchor extends Component {
    render () {
        return <a name={this.props.name} />
    }
}

export default Anchor;