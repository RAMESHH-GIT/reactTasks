import React, { useState } from "react";
//import "./index.css";

function MovieList() {
  const [selectedYear, setSelectedYear] = useState(null);
  const [result, setResult] = useState([]);

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  const onClick = () => {
    resolveData(selectedYear);
  };

  const resolveData = (year) => {
    fetch(`https://jsonmock.hackerrank.com/api/movies?Year=${year}`)
      .then((response) => response.json())
      .then((result) => console.log(result.data));
     // .then((result) => setResult(result.data));
  };

  return (
    <div className="layout-column align-items-center mt-50">
      <section className="layout-row align-items-center justify-content-center">
        <input
          type="number"
          className="large"
          placeholder="Enter Year eg 2015"
          data-testid="app-input"
          onBlur={handleYearChange}
        />
        <button className="" data-testid="submit-button" onClick={onClick}>
          Search
        </button>
      </section>
      {selectedYear && result.length > 0 && (
        <ul className="mt-50 styled" data-testid="movieList">
          {result.map((res, index) => {
            return (
              <li className="slide-up-fade-in py-10" key={index + 1}>
                {res.Title}
              </li>
            );
          })}
        </ul>
      )}
      {selectedYear && result.length === 0 && (
        <div className="mt-50 slide-up-fade-in" data-testid="no-result">
          No Movies found
        </div>
      )}
    </div>
  );
}

export default MovieList;
