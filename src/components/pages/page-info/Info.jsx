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
    <div className="array">

    </div>
  );
};