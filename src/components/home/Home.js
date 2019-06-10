import React, { Component } from 'react';
import '../../App.css';

class Home extends Component {
  //find the height and the width of the home-landing-stars
  //make cordinates every
  render() {
    return (
      <div>
        <div className="home-landing-screen">
          <div className="home-landing-stars">
            <div className="home-name-landing">Justin DeMarco!</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
