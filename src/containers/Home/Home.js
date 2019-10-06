import React, { Component } from 'react';

class Home extends Component {

    handlerStart = () => {
        this.props.history.push(`/poker-planning-add-story-list`);
    }

    render() {
        return (
            <div>
                <span>Home Page</span>
                <button onClick={() => this.handlerStart()} >Start</button>
            </div>
        );
    }
}

export default Home;
