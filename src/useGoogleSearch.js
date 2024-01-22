import React, { useEffect, useState } from "react";
import API_KEY from "./keys";
const CONTEXT_KEY = "41488c95b195947b2";

const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetechData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      )
        .then((response) => response.json())
        .then((result) => {
          setData(result);
        });
      };
      fetechData();
  }, [term]);
  return { data };
};
export default useGoogleSearch;
