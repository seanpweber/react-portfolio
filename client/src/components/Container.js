import React, { Component } from 'react';
import '../index.css';

class Container extends Component {
    render () {
        return <div class="content">
            {this.props.children}
        </div>
    }
}

export default Container;