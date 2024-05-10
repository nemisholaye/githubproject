import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import MoonLoader from "react-spinners/MoonLoader";
import { Helmet } from "react-helmet-async";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "black",
};
const GitRepo = () => {
  <Helmet>
    <title>GitRepo</title>
    <meta name="description" content="my git repo" />
    <link rel="canonical" href="/git-repo" />
  </Helmet>;
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);

  const [currentPage, setcurrentPage] = useState(1);
  const itemsPerPage = 3;
  const pageNumberLimit = 3;
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(3);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  const handleClick = (event) => {
    setcurrentPage(Number(event.target.id));
  };

  const pages = [];
  for (let i = 1; i <= Math.ceil(repos.length / itemsPerPage); i++) {
    pages.push(i);
  }
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = repos.slice(indexOfFirstItem, indexOfLastItem);

  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          key={number}
          id={number}
          onClick={handleClick}
          className={currentPage === number ? "active" : null}
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });

  const handleNextbtn = () => {
    setcurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevbtn = () => {
    setcurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await fetch("https://api.github.com/users/nemisholaye/repos");
      const data = await response.json();

      setRepos(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  console.log("repos... ", repos);

  const listRepos = currentItems.map((repo) => {
    return (
      <li key={repo.id} className="container">
        <Link
          to="myrepo"
          state={{
            ...repo,
          }}
        >
          {repo.name}
        </Link>
      </li>
    );
  });

  if (loading) {
    return <MoonLoader loading={loading} cssOverride={override} size={150} />;
  }

  return (
    <div className="gitRepo`">
      <div className="firstGrid">
        <ul className="pageNumbers">
          <li>
            <button
              onClick={handlePrevbtn}
              disabled={currentPage === pages[0] ? true : false}
              className="prevNext"
            >
              Prev
            </button>
          </li>

          {renderPageNumbers}
          <li>
            <button
              onClick={handleNextbtn}
              disabled={currentPage === pages[pages.length - 1] ? true : false}
              className="prevNext"
            >
              Next
            </button>
          </li>
        </ul>

        <ul className="container">{listRepos}</ul>
      </div>
      <div className="secondGrid">
        <Outlet />
      </div>
    </div>
  );
};

export default GitRepo;
