import React, { Component } from 'react';
import '../../App.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header-menu header-menu-left">
            <div>Home</div>
            <div>Profile</div>
        </div>
        <div>

        </div>
        <div className="header-menu header-menu-right">
            <div>Projects</div>
            <div>Contact</div>
        </div>
      </div>
    );
  }
}

export default Header;
