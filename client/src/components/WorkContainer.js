import React, { Component } from 'react';
import WorkCard from './WorkCard';
import '../index.css';

class WorkContainer extends Component {
    render () {
        return <div class="box">
            <p class="title is-3">Work</p>
            <WorkCard />
        </div>
    }
}

export default WorkContainer;