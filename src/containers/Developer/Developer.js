import React, { Component } from "react";
import "./Developer.css";

import { Vote } from "../../components/App/index";
import { Table, Loading } from "../../components/Ui/index";
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
      footerScore: null,
      loadingShow: false,
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
        this.setState({
          story: getStory.data[0]
        });
        if (getStory.data[0].status !== "Active") {
          const result = await updateStoryByStatus(values.id);
          if (result.status === "error") {
            alert("Story güncellenemedi");
          }
        }
      } else {
        alert("Story bulunamadı lütfen tekrardan giriş yapınız! ");
      }
    } else {
      alert("Story bulunamadı lütfen tekrardan giriş yapınız! ");
    }
  };

  handlerToVote = async item => {
    this.setState({
      loadingShow: true
    })
    setTimeout(async () => {
      const localStorageData = localStorage.getItem(this.state.story._id);
      if (localStorageData !== "true") {
        const getVoter = await getVoterBySessionName(this.state.story.sessionName);
        let notScrumMaster = []
        for (let index = 0; index < getVoter.data.length; index++) {
          if(getVoter.data[index].voterName && getVoter.data[index].voterName !== "Scrum Master"){
            notScrumMaster.push(getVoter.data[index])
          }   
        }
        if (notScrumMaster.length < this.state.story.voterCount - 1) {
          const data = {
            sessionName: this.state.story.sessionName,
            voterName: "Voter" + ' ' + (notScrumMaster.length + 1),
            score: parseInt(item)
          };
          const result = await addVoter(data);
          if (result.status === "success") {
            this.setState({
              footerScore: result.data.score,
              loadingShow: false
            })
            localStorage.setItem(this.state.story._id, true)
          }else{
            this.setState({
              loadingShow: false
            })
          }
        } else {
          this.setState({
            loadingShow: false
          })
          alert("Planlama maximum kişi sayısına ulaşmıştır.");
        }
      } else {
        this.setState({
          loadingShow: false
        })
        alert("Sadece bir oy verebilirsiniz");
      }
    }, 2000);
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
          <Vote onClick={this.handlerToVote} footerScore={this.state.footerScore} />
        </div>
        {this.state.loadingShow === true ? (
          <Loading show={this.state.loadingShow} />
        ) : (
            ""
          )}
      </div>
    );
  }
}

export default Developer;
