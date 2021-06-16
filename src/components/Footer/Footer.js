import React, { useState } from 'react';
import {FaFacebook, FaTwitter, FaLinkedin} from 'react-icons/fa'

const Footer = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  return (
    <React.Fragment>
      <div className="Footer">
        <div className="Footer__container container">
          <div className="Footer__contents">
            <h3 className="Footer__contents--newsletter">NEWSLETTER</h3>
            <h3 className="Footer__contents--title">
              la Galerie d'Or likes to send you emails
            </h3>
            <input
              type="text"
              className="Footer__contents--input"
              placeholder="Name"
              id='name'
            />
            <label htmlFor="name" className="Footer__contents--label">Name</label>
            <input
              type="email"
              className="Footer__contents--input"
              placeholder="Email"
              id='email'
            />
            <label htmlFor="email" className="Footer__contents--label">
              Email
            </label>
            <button className="Footer__contents--button">sign up</button>
          </div>
          <div className="Footer__side">
            <p className="Footer__side--copy">&copy; 2021 la Galerie d'Or</p>
            <p className='Footer__side--text'>
              Thanks to harvard <a href="https://harvardartmuseums.org/" className="Footer__side--link">Harvard Art Museums </a>
               for providing the API.
            </p>
          <a href="#" className='Footer_-side--link'>
            <FaFacebook className='Footer__side--icon'/>
          </a>
          <a href="#" className='Footer_-side--link'>
            <FaTwitter className='Footer__side--icon'/>
          </a>
          <a href="#" className='Footer_-side--link'>
            <FaLinkedin className='Footer__side--icon'/>
          </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
