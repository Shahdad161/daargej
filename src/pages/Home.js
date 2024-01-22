import React from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faImage } from '@fortawesome/free-solid-svg-icons';
import Search from './Search';
import SearchPage from './SearchPage';

const daargejLogo = require('./abc-removebg-preview.png');

function Home() {
  return (
    <div>
      {/* Top Bar */}
      <div className="container  home__header">
        <div className="container d-flex justify-content-end align-items-center py-1">
          <a href="https://mail.google.com/" className="mr-3 text-dark">
            <FontAwesomeIcon icon={faEnvelope} className="mr-1" />
            Gmail
          </a>
          <a href="https://www.google.com/imghp" className="mr-3 text-dark">
            <FontAwesomeIcon icon={faImage} className="mr-1" />
            Images
          </a>
          <button className="btn btn-light">Sign in</button>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mt-5 home__body">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="d-flex justify-content-center">
              <img
                src={daargejLogo}
                alt="Dhargej"
                className="img-fluid "
              />
            </div>
            <Search/>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
