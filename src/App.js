import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header";

import HomePage from './components/HomePage';
import WorkPage from './components/WorkPage';
import AboutPage from './components/AboutPage';

class App extends Component {

  render() {
    return (
      <Router>
      <Header />
      <div className="App">
        <Route exact path="/" component={HomePage} />
        <Route exact path="/work-page" component={WorkPage} />
        <Route exact path="/about-page" component={AboutPage} />

      </div>
      </Router>
    );
  }
}

export default App;