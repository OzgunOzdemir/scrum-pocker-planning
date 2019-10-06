import React, { Component } from 'react';
import './ScrumMaster.css';

class ScrumMaster extends Component {

  render() {
    return (
      <div className="row">
        <div className="col-lg-6 col-12">
          <div>Story List</div>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Story</th>
                  <th>Story Point</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Story 1</td>
                  <td></td>
                  <td>Active</td>
                </tr>
                <tr>
                  <td>Story 2</td>
                  <td></td>
                  <td>Not Voted</td>
                </tr>
                <tr>
                  <td>Story 3</td>
                  <td></td>
                  <td>Not Voted</td>
                </tr>
                <tr>
                  <td>Story 4</td>
                  <td></td>
                  <td>Not Voted</td>
                </tr>
                <tr>
                  <td>Story 5</td>
                  <td></td>
                  <td>Not Voted</td>
                </tr>
                <tr>
                  <td>Story 6</td>
                  <td></td>
                  <td>Not Voted</td>
                </tr>
                <tr>
                  <td>Story 7</td>
                  <td></td>
                  <td>Not Voted</td>
                </tr>
                <tr>
                  <td>Story 8</td>
                  <td></td>
                  <td>Not Voted</td>
                </tr>
                <tr>
                  <td>Story 9</td>
                  <td></td>
                  <td>Not Voted</td>
                </tr>
                <tr>
                  <td>Story 10</td>
                  <td></td>
                  <td>Not Voted</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-lg-3 col-12">
          <div>Active Story ( Story 1 )</div>
          <div className="active-story-container">
            <div className="row colum-container">
              <div className="col-3"><div className="vote-container">1</div></div>
              <div className="col-3"><div className="vote-container">1</div></div>
              <div className="col-3"><div className="vote-container">1</div></div>
              <div className="col-3"><div className="vote-container">1</div></div>
            </div>
            <div className="row colum-container">
              <div className="col-3"><div className="vote-container">8</div></div>
              <div className="col-3"><div className="vote-container">10</div></div>
              <div className="col-3"><div className="vote-container">21</div></div>
              <div className="col-3"><div className="vote-container">34</div></div>
            </div>
            <div className="row colum-container">
              <div className="col-3"><div className="vote-container">55</div></div>
              <div className="col-3"><div className="vote-container">89</div></div>
              <div className="col-3"><div className="vote-container">134</div></div>
              <div className="col-3"><div className="vote-container">?</div></div>
            </div>
            <div className="active-story-container-footer">
              Please Vote!!!
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-12">
          <div>Scrum Master Panel</div>
          <div className="scrum-master-panel-container">
            <div>Scrum 1 is active</div>
            <div className="voter-result-container">
              <span>Voter 1 : Voted</span>
            </div>
            <div className="voter-result-container">
              <span>Voter 2 : Not Voted</span>
            </div>
            <div className="voter-result-container">
              <span>Voter 3 : Voted</span>
            </div>
            <div className="voter-result-container">
              <span>Voter 4 : Not Voted</span>
            </div>
            <div className="voter-result-container">
              <span>Scrum Master : Not Voted</span>
            </div>
            <div className="scrum-master-panel-container-footer">
              <button>End Waiting For Story 1</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ScrumMaster;
