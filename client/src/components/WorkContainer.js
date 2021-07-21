import React, { Component } from 'react';
import WorkCard from './WorkCard';
import '../styles/work.css';

class WorkContainer extends Component {
    render () {
        return <div class="box">
            <p id="workContainer" class="title is-3">Work</p>
            <WorkCard />
        </div>
    }
}

export default WorkContainer;