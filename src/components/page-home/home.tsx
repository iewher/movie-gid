import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import background from "../../../src/background.mp4";
import { Button, Input } from "antd";
import { useNavigate } from "react-router-dom";
import "../../scss/home/home-style.scss";

export const Home = () => {
  const [films, setFilms] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (films !== "") {
      localStorage.setItem("movie", JSON.stringify(films));
      navigate("/movies");
      return;
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
          <form onSubmit={handleSubmit}>
            <Input
              size="large"
              placeholder="Введите название..."
              value={films}
              onChange={(e) => setFilms(e.target.value)}
              type="text"
            />
            <Button htmlType="submit">
              <BsSearch />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};
