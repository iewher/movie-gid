import React, { useState, useEffect } from 'react';
import './style/info-style.css';

export const Info = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    const parsed_title = localStorage.getItem('film');
    const title = JSON.parse(parsed_title);
    const API_KEY = 'aa1985f4';
    const API_URL =
      `https://www.omdbapi.com/?t=${title}&plot=full&apikey=` + API_KEY;
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