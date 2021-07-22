import React, { Component } from 'react';
import '../styles/about.css';
import Headshot from './Headshot';

class About extends Component {
    render () {
        return <div>
            <div id="aboutImg">
                <Headshot />
            </div>
            <div class="box" id="aboutMe">
                <p class="title is-3">About Me</p>
                <p>Hi! My name is Sean Weber, I'm a Full-stack web developer, specializing in ReactJS. I previously have 4 years of experience working in veterinary medicine as a CT/MRI technician, and 4 years experience as a sound engineer specializing in live sound system installation and operation. I have a love for applying technical skills to areas of my life that I am passionate about, and I hope to continue to do that as web developer. Beautiful UI is something I'm very passionate about and I try to better my skills every day. </p>
            </div>
        </div>
    }
}

export default About;