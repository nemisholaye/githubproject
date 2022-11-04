import React from "react";

import { useLocation } from "react-router-dom";

const MyRepo = () => {
  const { state } = useLocation();
  console.log("My state", state);
  const { name, language, html_url, created_at, default_branch } = state;

  return (
    <div className="myrepo">
      <p>Repo name is {name}</p>
      <p>Created On {created_at} </p>
      <p>The default branch is {default_branch}</p>
      <p>Language: {language}</p>
      <p>
        <a href={html_url} target="blank">
          View Repo
        </a>
      </p>
    </div>
  );
};

export default MyRepo;
