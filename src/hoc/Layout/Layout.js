import React, { Component } from 'react';

import './Layout.css';
import { Header } from '../../components/Layout/index.js';

class Layout extends Component {
    
    render () {
        return (
            <React.Fragment>
                <div className="container content">
                    <Header />
                    {this.props.children}
                </div>
            </React.Fragment>
        )
    }
}

export default Layout;