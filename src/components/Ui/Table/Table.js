import React, { Component } from "react";
import "./Table.css";

import { getStory } from "../../../services/index";

class Table extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allStory: null
    };
  }

  componentDidMount = async () => {
    setInterval(async() => {
      const result = await getStory();
      if (result.status === "success") {
        this.setState({
          allStory: result.data
        });
      } else {
        alert("Story veritabanından çekilemedi.");
      }
    }, 2000);
  
  };

  render() {
    return (
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
            {this.state.allStory ? (
              this.state.allStory.map((item, i) => 
                <tr key={i}>
                  <td>Story {i + 1}</td>
                  <td>{item.finalScore ? item.finalScore : ""}</td>
                  <td>{item.status}</td>
                </tr>
              )
            ) : (
              <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export { Table };
