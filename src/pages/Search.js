import React, { useState } from "react";
import {actionTypes} from '../reducer.js'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faMicrophone } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';
import { useStateValue } from '../StateProvider.js'
  

function Search({ hidebuttons }) {
  const [{ }, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const search = (e) => {
    e.preventDefault();
    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input
    })
    navigate('/search');
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      search(e);
    }
  };

  return (
    <div>
      <div className="input-group rounded-pill border mt-3 mt-lg-4 mr-lg-5 ml-0 mb-4">
        <div className="input-group-append border-0">
          <button
            className="btn border-0 btn-outline-secondary"
            type="button"
            onClick={search}
          >
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          className="border-0 form-control"
          placeholder="Search on Dhargej or type a URL"
          onKeyPress={handleKeyPress}
        />
        <div className="input-group-append border-0">
          <button
            className="btn border-0 btn-outline-secondary"
            type="button"
          >
            <FontAwesomeIcon icon={faMicrophone} />
          </button>
        </div>
      </div>
      {!hidebuttons && (
        <div className="d-flex justify-content-center mt-3">
          <button
            onClick={search}
            className="btn btn-light pl-4 pr-4"
          >
            Daargej Search
          </button>
          <button className="btn btn-light ml-2">I'm Feeling Lucky</button>
        </div>
      )}
    </div>
  );
}

export default Search;
