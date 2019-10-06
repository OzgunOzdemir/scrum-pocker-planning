import React, {Component} from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import Home from './containers/Home/Home';
import StoryList from './containers/StoryList/StoryList';
import ScrumMaster from './containers/ScrumMaster/ScrumMaster';
import Developer from './containers/Developer/Developer';


class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <div>
            <Switch>
              <Route path="/" exact strict component={Home} />
              <Route path="/poker-planning-add-story-list" exact strict component={StoryList} />
              <Route path="/poker-planning-view-as-scrum-master" exact strict component={ScrumMaster} />
              <Route path="/poker-planning-view-as-developer" exact strict component={Developer} />
              <Route component={Error} />
            </Switch>
          </div>
        </Layout>
      </Router>
    );
  }
}

const Error = () => {
  return (
    <h1>This page was not found.</h1>
  )
}

export default App;
