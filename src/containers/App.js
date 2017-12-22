import React, { Component } from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import openSocket from 'socket.io-client';
import { subscribeToTimer } from '../api.js';

const socket = openSocket('http://localhost:4242');

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
