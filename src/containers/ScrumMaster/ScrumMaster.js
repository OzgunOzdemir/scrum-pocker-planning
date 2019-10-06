import React, { Component } from 'react';
import './ScrumMaster.css';

import { Vote } from '../../components/App/index';
import { Table } from '../../components/Ui/index';

class ScrumMaster extends Component {

  render() {
    return (
      <div className="row">
        <div className="col-lg-6 col-12">
          <div>Story List</div>
          <Table />
        </div>
        <div className="col-lg-3 col-12">
          <div>Active Story ( Story 1 )</div>
           <Vote />
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
