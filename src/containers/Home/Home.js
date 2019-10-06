import React, { Component } from 'react';
import './Home.css'

class Home extends Component {

    handlerStart = () => {
        this.props.history.push(`/poker-planning-add-story-list`);
    }

    render() {
        return (
            <div className="center">
                <span className="home-title f30">Welcome at Scrum Pocker Planning</span>
                <button className="home-button" onClick={() => this.handlerStart()}><span className="f20">Start</span></button>
            </div>
        );
    }
}

export default Home;
