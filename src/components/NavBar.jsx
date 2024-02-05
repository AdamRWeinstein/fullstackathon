import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <div className="navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink to='/' className="nav-link">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/about' className="nav-link">About</NavLink>
            </li>
          </ul>
        </div>

        <div className="navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink to='/rides' className="nav-link">Rides</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/add-ride' className="nav-link">Add Ride</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
