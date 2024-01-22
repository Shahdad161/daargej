import { Link } from "react-router-dom";
import React from "react";
import "./SearchPage.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Search from "./Search";
import { useStateValue } from "../StateProvider.js";
import useGoogleSearch from "../useGoogleSearch.js";

const daargejLogo = require("./abc-removebg-preview.png");

function SearchPage() {
  const [{ term }] = useStateValue();
  const { data } = useGoogleSearch(term);
  console.log(data);
  return (
    <div className="searchPage container-fluid">
      <div className="searchPage__header d-lg-flex">
        <Link to="/">
          <img
            src={daargejLogo}
            alt="Daargej"
            className="img-fluid mx-auto d-block mr-lg-4   mr-3 mt-4"
          />
        </Link>
        <div>
          <Search hidebuttons />
        </div>
      </div>
      <div className="searchPage_middle m-0 ">
        <div className=" searchPage_middleOptions m-0 p-0 ml-lg-5 d-flex ">
          <p className="mr-2 p-2 border hover border-999px">All</p>
          <p className="mr-2 p-2 border hover border-999px">Images</p>
          <p className="mr-2 p-2 border hover border-999px">Video</p>
          <p className="mr-2 p-2 border hover border-999px">News</p>
          <p className="mr-2 p-2 border hover border-999px">Shoping</p>
        </div>
      </div>
      <hr className="mb-1"></hr>
      {term && (
        <div className="searchPage__results container pt-lg-3">
          <p className="searchPage__resultCount">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime} seconds)
          </p>
          {data?.items.map((item) => {
            return (
              <div className="searchPage__result border rounded p-2 mb-1">
                <a href={item.Link} className="searchPage__resultLink">
                  {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src &&(
                    <img
                      className="img-fluid "
                      src={item.pagemap?.cse_image[0]?.src}
                    />)} 
                  {item.displayLink}
                </a>
                <a href={item.displayLink} className="searchPage__resultTitle">
                  <h5>
                    {item.title}
                  </h5>
                </a>
                <p className="searchPage__resultDesc text-break w-40">
                  {item.snippet}
                </p>
              </div>
            );
          })}{" "}
        </div>
      )}
    </div>
  );
}

export default SearchPage;