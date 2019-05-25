import React, { Component } from 'react';

import CoverPage from './components/CoverPage';
import AboutSection from './components/AboutSection';
import WorkSection from './components/WorkSection';
import FooterSection from './components/FooterSection';

class App extends Component {

  render() {
    return (
      <div className="App">
        <CoverPage />
        <AboutSection />
        <WorkSection />
        <FooterSection />
      </div>
    );
  }
}

export default App;