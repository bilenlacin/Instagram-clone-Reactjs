import './App.css';
import Navbar from './Navbar';
import Mainpage from './Mainpage';

import React, { Component } from 'react';

export class App extends Component {
  render() {
    return (
      <div className='instaApp'>
        <Mainpage />
        <Navbar />
      </div>
    );
  }
}

export default App;
