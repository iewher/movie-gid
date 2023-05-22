import React, { useState, useEffect } from 'react';
import './style/info-style.css';

export const Info = () => {
  const [data, setData] = useState(null);

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

  return (
    <div className="info">
      <div className="info-poster">
        <img src={data && data.Poster} className='info-poster-img'/>
      </div>
      <div className="info-text">
        <div className="info-name">
          <h1>{data.Title}</h1>
        </div>
        <div className='info-movie'>
          <p><strong>Year</strong>: {data.Year}</p>
          <p><strong>Genre</strong>: {data.Genre}</p>
          <p><strong>Country</strong>: {data.Country}</p>
          <p><strong>Metascrote</strong>: {data.Metascore}</p>
          <p><strong>Writer</strong>: {data.Writer}</p>
          <p><strong>Director</strong>: {data.Director}</p>
          <p><strong>Runtime</strong>: {data.Runtime}</p>
          <p><strong>Box office</strong>: {data.BoxOffice}</p>
          <p><strong>Awards</strong>: {data.Awards}</p>
          <p><strong>Plot</strong>: {data.Plot}</p>
        </div>
      </div>
    </div>
  );
};