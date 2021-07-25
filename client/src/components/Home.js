import React, { Component } from 'react';
import Headshot from './Headshot';
import '../styles/home.css';
import '../styles/animation.css';

class Home extends Component {
    render () {
        return <div id="home">
            <Headshot />
            <div id="homeContent">
                <h4 class="title is-4">Hi! I'm Sean.</h4>
                <h5 class="title is-5 has-text-right">I'm a full-stack web developer.</h5>
                <a href="/work">
                    <div id="workTab" class="box">
                        <p class="title is-6">Checkout my work!</p>
                    </div>
                </a>
            </div>
        </div>
    }
}

export default Home;