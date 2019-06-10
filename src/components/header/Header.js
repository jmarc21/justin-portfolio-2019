import React, { Component } from 'react';
import '../../App.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header-left">Justin</div>
        <div className="header-right">
            <div className="header-right-menu">
                <div>Home</div>
                <div>Profile</div>
                <div>Contact</div>
            </div>
        </div>
      </div>
    );
  }
}

export default Header;
