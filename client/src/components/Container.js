import React, { Component } from 'react';
import '../index.css';

class Container extends Component {
    render () {
        return <div id="bodyContainer" class="content">
            {this.props.children}
        </div>
    }
}

export default Container;