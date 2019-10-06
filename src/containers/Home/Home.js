import React, { Component } from 'react';
import './Home.css';

import { connect } from 'react-redux';
import { updateExample } from '../../redux/actions/index';
import { getPosts } from '../../services/index'

class Home extends Component {

  componentDidMount = async() => {
    const result = await getPosts();
    console.log(result)
  }


  render() {
    return (
      <div className="container">
        <span>{this.props.example.name}</span>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return ({
    example: state.example
  });
}

const mapDispatchToProps = {
  onUpdateExample: updateExample
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
