import React, { Component } from 'react';
import ProjectService from '../services/ProjectService';

class WorkCard extends Component {
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
        return (
            <div class="workBox">
                {
                    this.state.projects.map( project =>
                    <div class="card">
                        <div class="card-image">
                            <a href={project.url} rel="noreferrer" target="_blank">
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
                    </div>
                    )
                }
            </div>
        )
    }
}
export default WorkCard;