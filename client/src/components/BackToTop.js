import React, { Component } from 'react';

class BackToTop extends Component {
    render () {
        return <a id="backToTop" class="button is-info hide" href="#top">
            <p id="topBtnText">
                ↑ Back to top
            </p>
        </a>
    }
}

export default BackToTop;
