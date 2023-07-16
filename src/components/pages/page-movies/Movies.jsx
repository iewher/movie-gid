import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./style/movies-style.scss";

export const Movies = () => {
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    localStorage.removeItem("movieId");
  }, [location]);

  const fetchData = () => {
    const parsed_title = localStorage.getItem("movie");
    const title = JSON.parse(parsed_title);
    const API_KEY = "aa1985f4";
    const API_URL =
      `https://www.omdbapi.com/?s=${title}&plot=full&apikey=` + API_KEY;
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  const onClick = () => {
    navigate("/");
    localStorage.removeItem("movie");
  };

  const goToInfo = (imdbID) => {
    localStorage.setItem("movieId", JSON.stringify(imdbID));
    navigate("/page-info");
  };

  const get_movie = localStorage.getItem("movie");
  const movie_name = JSON.parse(get_movie);

  return (
    <div className="movies">
      <div className="request">
        <p>
          <strong>Here is what we found for your request {movie_name}</strong>
        </p>
      </div>
      <div>
        <button onClick={onClick} className="button-back">
          Back to search
        </button>
      </div>
      <div className="table">
        {data && data.Search ? (
          data.Search.map((movie) => (
            <div
              className="movie-info"
              key={movie.imdbID}
              onClick={() => goToInfo(movie.imdbID)}
            >
              <img src={movie.Poster} alt={movie.Title} />
              <div className="movie-details">
                <h2>{movie.Title}</h2>
                <p>
                  <strong>Year:</strong> {movie.Year}
                </p>
                <p>
                  <strong>Type:</strong>{" "}
                  {movie.Type === "movie"
                    ? "Film"
                    : movie.Type === "series"
                    ? "Series"
                    : movie.Type === "game"
                    ? "Game"
                    : "undefined"}
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className="error-movies-search">
            <p>
              Sorry, we could not find information on the film {movie_name},
              make another request
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
