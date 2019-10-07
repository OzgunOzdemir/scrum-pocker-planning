import React, { Component } from "react";
import "./StoryList.css";

import { addStory, getStory } from "../../services/index";
import { Loading } from "../../components/Ui/index";
import { setTimeout } from "timers";

class StoryList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sessionName: null,
      voterCount: null,
      loadingShow: false,
      allStory: null
    };
  }

  componentDidMount = async() => {
    const result = await getStory();
    if(result.status === "success"){
      this.setState({
        allStory: result.data
      })
    }else {
      alert("Story veritabanından çekilemedi.");
    }
  }
  

  // componentWillUnmount = () => {
  //   this.setState({
  //     sessionName: null,
  //     voterCount: null,
  //     loadingShow: false
  //   })
  // }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  
  handlerScrumMaster = async () => {
    if (!this.state.sessionName || !this.state.voterCount) {
      return alert("Alanlar boş geçilemez");
    }
    if (this.state.voterCount === 0) {
      return alert("Number of Voters alanı 0 olamaz");
    }
    this.setState({
      loadingShow: true
    });
    setTimeout(async () => {
      const result = await addStory(this.state);
      if (result.status === "success") {
        this.props.history.push("/poker-planning-view-as-scrum-master");
      } else {
        alert("Story kayıt işlemi başarılı olamadı.");
      }
      this.setState({
        loadingShow: false
      });
    }, 3000);
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <div className="row">
            <div className="col-md-6 col-12">
              <div className="row">
                <div className="col-md-4 col-12">
                  <span className="form-title">Session Name:</span>
                </div>
                <div className="col-md-8 col-12">
                  <input
                    type="text"
                    name="sessionName"
                    id="sessionName"
                    onChange={this.onChange}
                    maxLength="200"
                    placeholder="Please enter the session name"
                  ></input>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="row">
                <div className="col-md-4 col-12">
                  <span className="form-title">Number of Voters:</span>
                </div>
                <div className="col-md-8 col-12">
                  <input
                    type="number"
                    name="voterCount"
                    id="voterCount"
                    onChange={this.onChange}
                    placeholder="Please enter the number of voters"
                  ></input>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 text-area-note">
              <span>
                Paste your story list (Each line will be converted as a story)
              </span>
            </div>
            <div className="col-12">
              {/* <textarea rows="15" cols="50"></textarea> */}
              <div className="all-story-container">
                {
                  this.state.allStory ?
                  this.state.allStory.map((item, i) => 
                    <span key={i} className="story-title">Story {i+1}</span>
                  ) : null
                }
              </div>
            </div>
          </div>
          <div className="button-container">
            <button onClick={() => this.handlerScrumMaster()}>
              Start Session
            </button>
          </div>
          {this.state.loadingShow === true ? (
            <Loading show={this.state.loadingShow} />
          ) : (
            ""
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default StoryList;
