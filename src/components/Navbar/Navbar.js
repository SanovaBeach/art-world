import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <React.Fragment>
      <div className="Navbar">
        <div className="Navbar__menu container">

          <ul className="Navbar__nav">
            <li className="Navbar__nav--item">
              <Link to="/" className="Navbar__nav--link">
                Home
              </Link>
            </li>
            <li className="Navbar__nav--item">
              <Link to="/learn" className="Navbar__nav--link">
                Learn
              </Link>
            </li>
            <li className='Navbar__nav--item'>
              <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
                <h1 className="Navbar__logo">la Galerie d'Or</h1>
              </Link>
            </li>
            <li className="Navbar__nav--item">
              <Link to="/collections" className="Navbar__nav--link">
                Collections
              </Link>
            </li>
            <li className="Navbar__nav--item">
              <Link to="/about" className="Navbar__nav--link">
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
