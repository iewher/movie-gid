import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './style/info-style.css';

export const Info = () => {
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    const get_movie = localStorage.getItem('movieId');
    const movie = JSON.parse(get_movie);
    const API_KEY = 'aa1985f4';
    const API_URL =
      `http://www.omdbapi.com/?i=${movie}&plot=full&apikey=` + API_KEY;
      
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  const goToMovies = () => {
    navigate('/movies');
    localStorage.removeItem('movieId');
  }

  const goToSearch = () => {
    navigate('/');
    localStorage.removeItem('movieId');
    localStorage.removeItem('movie');
  }

  return (
    <div className="info">
      <div className="info-poster">
        <img src={data && data.Poster} className='info-poster-img'/>
      </div>
      <div className="info-text">
        <div className="info-name">
          <h1>{data && data.Title}</h1>
        </div>
        <div className='info-movie'>
          <p className='info-p'><strong>Year</strong>: {data && data.Year}</p>
          <p className='info-p'><strong>Genre</strong>: {data && data.Genre}</p>
          <p className='info-p'><strong>Country</strong>: {data && data.Country}</p>
          <p className='info-p'><strong>Metascrote</strong>: {data && data.Metascore}</p>
          <p className='info-p'><strong>Writer</strong>: {data && data.Writer}</p>
          <p className='info-p'><strong>Director</strong>: {data && data.Director}</p>
          <p className='info-p'><strong>Runtime</strong>: {data && data.Runtime}</p>
          <p className='info-p'><strong>Box office</strong>: {data && data.BoxOffice}</p>
          <p className='info-p'><strong>Awards</strong>: {data && data.Awards}</p>
          <p className='info-p'><strong>Plot</strong>: {data && data.Plot}</p>
        </div>
        <div>
          <button className='info-buttons' onClick={goToSearch}>Назад к поиску</button>
          <button className='info-buttons' onClick={goToMovies}>Назад к фильмам</button>
        </div>
      </div>
    </div>
  );
};