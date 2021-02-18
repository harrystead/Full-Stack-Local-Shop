import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-light bg-light navbar-expand-lg">
        <h2 className="navbar-brand">ThriftSale</h2>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="navbar-item">
          <Link to="/profile" className="nav-link">Profile</Link>
          </li>
          <li className="navbar-item navbar-float-right">
          <Link to="/create" className="nav-link">Add Items</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}