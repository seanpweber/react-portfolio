import React, { Component } from 'react';
import WorkCard from './WorkCard';
import '../index.css';

class WorkContainer extends Component {
    render () {
        return <div class="box">
            <h3 class="title is-3">Work</h3>
            <WorkCard />
        </div>
    }
}

export default WorkContainer;