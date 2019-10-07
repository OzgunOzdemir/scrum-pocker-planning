import React, { Component } from "react";
import "./Developer.css";

import { Vote } from "../../components/App/index";
import { Table } from "../../components/Ui/index";
import queryString from "query-string";
import {
  updateStoryByStatus,
  getStoryById,
  getVoterBySessionName,
  addVoter
} from "../../services/index";

class Developer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      urlId: null,
      story: null,
      footerScore: null
    };
  }

  componentDidMount = async () => {
    const values = queryString.parse(this.props.location.search);
    if (values.id) {
      this.setState({
        urlId: values.id
      });
      const getStory = await getStoryById(values.id);
      if (getStory.status === "success") {
        debugger;
        this.setState({
          story: getStory.data[0]
        });
        if (getStory.data[0].status !== "Active") {
          const result = await updateStoryByStatus(values.id);
          if (result.status === "error") {
            alert("Story güncellenemedi");
          }
        }
      }else{
        alert("Story bulunamadı lütfen tekrardan giriş yapınız! ");
      }
    } else {
      alert("Story bulunamadı lütfen tekrardan giriş yapınız! ");
    }
  };

  handlerToVote = async item => {
    const getVoter = await getVoterBySessionName(this.state.story.sessionName);
    if (getVoter.data.length < this.state.story.voterCount) {
      const data = {
        sessionName: this.state.story.sessionName,
        voterName: "Voter" + ' ' + (getVoter.data.length + 1),
        score: parseInt(item)
      };
      const result = await addVoter(data);
      if(result.status === "success"){
        this.setState({
          footerScore: result.data.score
        })
      }
    } else {
      alert("Planlama maximum kiş sayısına ulaşmıştır.");
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
          <div>Active Story</div>
          <Vote onClick={this.handlerToVote} footerScore={this.state.footerScore}/>
        </div>
      </div>
    );
  }
}

export default Developer;
