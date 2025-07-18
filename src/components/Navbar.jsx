import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="navlogo">
        <img src="/assets/HiringMineLogo-453a72d3.png" alt="Hiring Mine Logo" />
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse navbar" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">About Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">People</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Jobs</a>
          </li>
          <li className="nav-item">
            {/* <a className="nav-link" href="#">Login</a> */}
            <Link className="nav-link"to={'./login'}>Login</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link"to={'./signup'}>Join Now</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link color_LPurple" href="#">Employee / Post Job</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
