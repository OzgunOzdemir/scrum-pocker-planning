import React, { Component } from 'react';
import './Developer.css';

import { Vote } from '../../components/App/index';
import { Table } from '../../components/Ui/index';
import queryString from "query-string";
import { updateStoryByStatus } from '../../services/index'

class Developer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      urlId: null
    };
  }

  componentDidMount = async() => {
    const values = queryString.parse(this.props.location.search);
    if (values.id) {
      this.setState({
        urlId: values.id
      });
      const result = await updateStoryByStatus(values.id)
      if(result.status === "error" ){
        alert("Story güncellenemedi")
      }
      
    } else {
      alert("Story bulunamadı lütfen tekrardan giriş yapınız! ")
    }
  };

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
