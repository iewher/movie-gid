import React, { useState } from "react";
import "./style/home-style.scss";
import { BsSearch } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import background from "./source/background.mp4";
import { useNavigate } from "react-router-dom";

const CreateInput = ({ onFilmsChange }) => {
  const handleFilms = (event) => {
    onFilmsChange(event.target.value);
  };

  return (
    <div className="home-input">
      <input placeholder="Waiting request" onChange={handleFilms} />
    </div>
  );
};

const CreateButton = ({ onClick }) => {
  return (
    <div className="home-button">
      <button onClick={onClick}>
        <BsSearch />
      </button>
    </div>
  );
};

const ReturnError = ({ onClose }) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <div className="error">
      <h2>I'm sorry, but you didn't make a request.</h2>
      <button onClick={handleClose}>
        <AiOutlineClose />
      </button>
    </div>
  );
};

export const Home = () => {
  const [films, setFilms] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (films !== "") {
      localStorage.setItem("movie", JSON.stringify(films));

      /*
      Интересно, что после 5 версии реакт роутер дом решил сменить название метода useHistoty на useNavigate
      */

      navigate("/movies");
    } else {
      setError(true);
    }
  };

  return (
    <div className="home">
      <div className="video-container">
        <video src={background} autoPlay loop muted />
        <h1 className="home-h1">
          Search for information about your favorite movies, games, series
        </h1>
        <div className="content">
          <CreateInput onFilmsChange={setFilms} />
          <CreateButton onClick={handleSubmit} />
        </div>
        {error && <ReturnError onClose={() => setError(false)} />}
      </div>
    </div>
  );
};
