import React, { Component } from "react";
import "./ScrumMaster.css";

import { Vote } from "../../components/App/index";
import { Table, Loading } from "../../components/Ui/index";
import queryString from "query-string";
import { getStoryById, addVoter, getVoterBySessionName, updateStoryByFinalScore } from '../../services/index';

class ScrumMaster extends Component {
  constructor(props) {
    super(props);

    this.state = {
      urlId: null,
      footerScore: null,
      story: null,
      loadingShow: false,
      voters: null,
      finalScore: null
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
        setInterval(async () => {
          const getVoter = await getVoterBySessionName(getStory.data[0].sessionName);
          this.setState({
            voters: getVoter.data
          })
        }, 2000);
      } else {
        alert("Story bulunamadı lütfen tekrardan giriş yapınız! ");
      }
    } else {
      this.props.history.push(`/poker-planning-add-story-list`);
    }
  };

  handlerToVote = (item) => {
    this.setState({
      loadingShow: true
    })
    setTimeout(async () => {
      const getStory = await getStoryById(this.state.story._id);
      if (getStory.status === "success") {
        this.setState({
          story: getStory.data[0]
        });
      } else {
        alert("Story bulunamadı lütfen tekrardan giriş yapınız! ");
      }
      const localStorageData = localStorage.getItem("Scrum Master" + this.state.story._id);
      if (localStorageData !== "true" && this.state.story.status === "Active") {
        const data = {
          sessionName: this.state.story.sessionName,
          voterName: "Scrum Master",
          score: parseInt(item)
        };
        const result = await addVoter(data);
        if (result.status === "success") {
          this.setState({
            footerScore: result.data.score,
            loadingShow: false
          })
          localStorage.setItem("Scrum Master" + this.state.story._id, true)
        } else {
          this.setState({
            loadingShow: false
          })
        }
      } else {
        this.setState({
          loadingShow: false
        })
        alert("Story Active değildir veya Scrum Master oyunu kullanmıştır.");
      }
    }, 2000);
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handlerFinalScore = async() => {
    if(!this.state.finalScore) {
      return alert("Final Score alanı boş")
    }
    const result = await updateStoryByFinalScore(this.state.urlId,this.state.finalScore);
    if(result.status === "success") {
      alert("story başarılı bir şekilde tamamlanmıştır.")
    }
  }

  render() {
    return (
      <div>
        <div className="developer-share-link">
          <span>Please share link of developers panel to the teammates :  </span>
          <a href="/#">http://localhost:3000/poker-planning-view-as-developer?id={this.state.urlId}</a>
        </div>
        <div className="row">
          <div className="col-lg-6 col-12">
            <div>Story List</div>
            <Table />
          </div>
          <div className="col-lg-3 col-12">
            <div>Active Story</div>
            <Vote onClick={this.handlerToVote} footerScore={this.state.footerScore} />
          </div>
          <div className="col-lg-3 col-12">
            <div>Scrum Master Panel</div>
            <div className="scrum-master-panel-container">
              {
                this.state.voters ?
                  this.state.voters.map((item, i) => 
                    <div key={i} className="voter-result-container">
                      <span>{item.voterName} : {item.score}</span>
                    </div>
                  )
                  : null
              }
              <div className="scrum-master-panel-container-footer">
                {
                  ( this.state.story && this.state.voters ) && ( this.state.story.voterCount ===  this.state.voters.length ) ? 
                  <input
                    className="final-score"
                    type="number"
                    name="finalScore"
                    id="finalScore"
                    onChange={this.onChange}
                    placeholder="Final Score"
                  ></input> : null
                }
                <br /><button onClick={() => this.handlerFinalScore()}>End Waiting For Story </button>
              </div>
            </div>
          </div>
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

export default ScrumMaster;
