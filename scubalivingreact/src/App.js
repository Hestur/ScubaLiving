import React, { Component } from 'react';
import './index.css';
import GridLayout from './GridLayout'
import HomeSection from './HomeSection'
import UdstyrSection from './UdstyrSection'


class App extends Component {
  render() {
    return (
      <div className="App">
      <GridLayout />
     <HomeSection />
     <UdstyrSection />

      </div>
    );
  }
}

export default App;
