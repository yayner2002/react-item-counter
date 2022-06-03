import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar bg-light">
        <div className="navbar">
          <a className="navbar-brand" href="https://google.com">
            Total Items <span className="badge bg-secondary m-2">{this.props.count}</span>
          </a>
        </div>
      </nav>
    );
  }
}

export default NavBar;
