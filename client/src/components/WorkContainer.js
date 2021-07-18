import React, { Component } from 'react';
import '../index.css';

class WorkContainer extends Component {
    render () {
        return <div class="box">
            <h3 class="title is-3">Work</h3>
            {this.props.children}
        </div>
    }
}

export default WorkContainer;