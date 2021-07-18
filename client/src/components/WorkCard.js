import React, { Component } from 'react';
import '../index.css';

class WorkCard extends Component {
    render () {
        return <div class="card">
        <div class="card-image">
            <a href={this.props.url} rel="noreferrer" target="_blank">
                <img class="workCardImg" alt={this.props.altText} id={this.props.imageID} />
            </a>
        </div>
        <div class="card-content">
            <div class="media">
                <div class="media-content">
                    <p class="title is-4">
                        {this.props.title}
                    </p>
                </div>
            </div>
        
            <div class="content">
                {this.props.description}
            </div>
        </div>
    </div>
    }
}
export default WorkCard;