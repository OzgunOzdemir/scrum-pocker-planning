import React, { Component } from 'react';
import './Home.css'

class Home extends Component {

    handlerStart = () => {
        this.props.history.push(`/poker-planning-add-story-list`);
    }

    render() {
        return (
            <div className="welcome-container">
                <span className="home-title">Welcome at Scrum Pocker Planning</span>
                <button className="home-button" onClick={() => this.handlerStart()}><span className="home-button-text">Start</span></button>
            </div>
        );
    }
}

export default Home;
