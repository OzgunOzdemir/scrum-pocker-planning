import React, { Component } from 'react'
import './Header.css'

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="header-box">
                    <span className="header-box-text">Scrum</span><br />
                    <span className="header-box-text">Poker</span>
                </div>
            </div>
        )
    }
}

export { Header }


