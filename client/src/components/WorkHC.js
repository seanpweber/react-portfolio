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
            <p id="workContainer" class="title is-3">My Work</p>
            <div class="workBox">
                    <a class="card" href="https://vinovr-experience.herokuapp.com" rel="noreferrer" target="_blank">
                        <div class="card-image">
                            <a>
                                <img class="workCardImg" alt="alt-text" src="https://github.com/seanpweber/Aframe-VinoVR/blob/main/client/src/images/aframescreenshot.png?raw=true" />
                            </a>
                        </div>
                        <div class="card-content">
                            <div class="media">
                                    <p id="workTitle" class="title is-7">
                                        Aframe-VinoVR
                                    </p>
                            </div>
                        
                            <div id="workDescription" class="content has-text-justified">
                                A browser-based VR experience that allows you to find new wines to try or enjoy your own in a scenic Mediterranean villa, with music that matches your mood. Our intention was to create a full sensorial experience, so that users could enjoy all the best parts of a trip to a classic vineyard from the comfort of their own home. This project was constructed using HTML, JavaScript, and the Aframe browser-based VR framework.
                            </div>
                        </div>
                    </a>
                    <a class="card" href="https://petable.herokuapp.com" rel="noreferrer" target="_blank">
                        <div class="card-image">
                            <a>
                                <img class="workCardImg" alt="alt-text" src="https://github.com/seanpweber/pet-able/raw/main/public/images/petable.png" />
                            </a>
                        </div>
                        <div class="card-content">
                            <div class="media">
                                    <p id="workTitle" class="title is-7">
                                        PetABLE
                                    </p>
                            </div>
                        
                            <div id="workDescription" class="content has-text-justified">
                                PetABLE is a business that specializes in sharing the love with our petable fury friends. The mission of this project is to provide a platform for users and shelters to not only post and share disabled pets for adoption, but also a place for those people who want to adopt a pet with a disability. This project was constructed using Javascript, HTML, CSS, Node, SQL, Bulma and Express.
                            </div>
                        </div>
                    </a>
                    <a class="card" href="https://seanpweber.github.io/ParkSharkNYC/" rel="noreferrer" target="_blank">
                        <div class="card-image">
                            <a>
                                <img class="workCardImg" alt="alt-text" src="https://github.com/seanpweber/ParkSharkNYC/raw/main/assets/images/demo1.png" />
                            </a>
                        </div>
                        <div class="card-content">
                            <div class="media">
                                    <p id="workTitle" class="title is-7">
                                        ParkSharkNYC
                                    </p>
                            </div>
                        
                            <div id="workDescription" class="content has-text-justified">
                                ParkSharkNYC is an app designed for users who enjoy visiting New York City Parks, exploring their features, and documenting their visits. Search for new park experiences by location or zip code, or document your visits in our journal feature! This project was constructed using HTML, CSS, and Bulma as a CSS framework. 
                            </div>
                        </div>
                    </a>
                    <a class="card" href="https://github.com/seanpweber/react-portfolio" rel="noreferrer" target="_blank">
                        <div class="card-image">
                            <a>
                                <img class="workCardImg" alt="alt-text" src="https://user-images.githubusercontent.com/76736497/127526369-3a15efef-298e-4a88-a905-4187980928b4.png" />
                            </a>
                        </div>
                        <div class="card-content">
                            <div class="media">
                                    <p id="workTitle" class="title is-7">
                                        Source code for this site
                                    </p>
                            </div>
                        
                            <div id="workDescription" class="content has-text-justified">
                                If you'd like to see what's under the hood, feel free to checkout my github repository!
                            </div>
                        </div>
                    </a>
            </div>
        </div>
    }
}

export default Work;