import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './style/info-style.scss';

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
        setData(data);
        console.log(data)
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  const handleClick =(path) => {
    navigate(path);
    localStorage.removeItem('movieId');
    if(path === '/') {
      localStorage.removeItem('movie');
    }
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
          {data && <>
            <p className='info-p'><strong>Type</strong>: {data.Type}</p>
            <p className='info-p'><strong>Year</strong>: {data.Year}</p>
            <p className='info-p'><strong>Genre</strong>: {data.Genre}</p>
            <p className='info-p'><strong>Country</strong>: {data.Country}</p>
            <p className='info-p'><strong>Metascrote</strong>: {data.Metascore ?? 'N/A'}</p>
            <p className='info-p'><strong>Writer</strong>: {data.Writer}</p>
            <p className='info-p'><strong>Director</strong>: {data.Director}</p>
            <p className='info-p'><strong>Runtime</strong>: {data.Runtime}</p>
            <p className='info-p'><strong>Box office</strong>: {data.BoxOffice ?? 'N/A'}</p>
            <p className='info-p'><strong>Awards</strong>: {data.Awards}</p>
            <p className='info-p'><strong>Plot</strong>: {data.Plot}</p>
          </>}
        </div>
        <div>
          <button className='info-buttons' onClick={() => handleClick('/')}>Back to search</button>
          <button className='info-buttons' onClick={() => handleClick('/movies')}>Back to movies</button>
        </div>
      </div>
    </div>
  );
};