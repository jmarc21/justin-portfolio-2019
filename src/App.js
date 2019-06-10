import React, { Component } from 'react';
import './App.css';
import routes from './routes.js';
import Header from './components/header/Header';

class App extends Component {
  render() {
    return (
      <div className="app-background-screen">
          <Header/>
          {routes}
      </div>
    );
  }
}

export default App;
