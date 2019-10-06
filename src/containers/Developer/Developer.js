import React, { Component } from 'react';
import './Developer.css';

import { Vote } from '../../components/App/index';
import { Table } from '../../components/Ui/index';

class Developer extends Component {

  render() {
    return (
      <div className="row">
        <div className="col-lg-8 col-12">
          <div>Story List</div>
          <Table />
        </div>
        <div className="col-lg-4 col-12">
          <div>Active Story ( Story 1 )</div>
          <Vote />
        </div>
      </div>
    );
  }
}

export default Developer;
