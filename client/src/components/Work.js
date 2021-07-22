import React, { Component } from 'react';
import ProjectService from '../services/ProjectService';
import '../styles/work.css';

class Work extends Component {
    constructor(props) {
        super(props)

        this.state = {
            projects: []
        }
    }

    componentDidMount(){
        ProjectService.getProjects().then( res => {
            this.setState({ projects: res.data});
        });
    }

    render () {
        return <div id="work" class="box">
            <p id="workContainer" class="title is-3">Work</p>
            <div class="workBox">
                {
                    this.state.projects.map( project =>
                    <a class="card" href={project.url} rel="noreferrer" target="_blank">
                        <div class="card-image">
                            <a>
                                <img class="workCardImg" alt="alt-text" src={project.image} />
                            </a>
                        </div>
                        <div class="card-content">
                            <div class="media">
                                    <p id="workTitle" class="title is-7">
                                        {project.title}
                                    </p>
                            </div>
                        
                            <div id="workDescription" class="content">
                                {project.description}
                            </div>
                        </div>
                    </a>
                    )
                }
            </div>
        </div>
    }
}

export default Work;