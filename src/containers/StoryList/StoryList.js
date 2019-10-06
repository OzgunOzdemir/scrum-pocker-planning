import React, { Component } from 'react';
import './StoryList.css';

class StoryList extends Component {

  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-md-6 col-12">
            <div className="row">
              <div className="col-md-4 col-12">
                <span className="form-title">Session Name:</span>
              </div>
              <div className="col-md-8 col-12">
                <input type="text" name="fname" placeholder="Please enter the session name"></input>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="row">
              <div className="col-md-4 col-12">
                <span className="form-title">Number of Voters:</span>
              </div>
              <div className="col-md-8 col-12">
                <input type="text" name="fname" placeholder="Please select the number of voters"></input>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-area-note">
            <span>Paste your story list (Each line will be converted as a story)</span>
          </div>
          <div className="col-12">
            <textarea rows="15" cols="50">
            </textarea>
          </div>
        </div>
        <div className="button-container">
          <button>Start Session</button>
        </div>
      </React.Fragment>
    );
  }
}

export default StoryList;
