import React, { Component } from "react";
import "./ScrumMaster.css";

import { Vote } from "../../components/App/index";
import { Table } from "../../components/Ui/index";
import queryString from "query-string";

class ScrumMaster extends Component {
  constructor(props) {
    super(props);

    this.state = {
      urlId: null,
      footerScore: null
    };
  }

  componentDidMount = () => {
    const values = queryString.parse(this.props.location.search);
    if (values.id) {
      this.setState({
        urlId: values.id
      });
    } else {
      this.props.history.push(`/poker-planning-add-story-list`);
    }
  };

  handlerToVote = (item) => {
    debugger;
  }

  render() {
    return (
      <div>
        <div className="developer-share-link">
          <span>Please share link of developers panel to the teammates :  </span>
          <a href="#">http://localhost:3000/poker-planning-view-as-developer?id={this.state.urlId}</a>
        </div>
        <div className="row">
          <div className="col-lg-6 col-12">
            <div>Story List</div>
            <Table />
          </div>
          <div className="col-lg-3 col-12">
            <div>Active Story ( Story 1 )</div>
            <Vote  onClick={this.handlerToVote} footerScore={this.state.footerScore}/>
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
      </div>
    );
  }
}

export default ScrumMaster;
