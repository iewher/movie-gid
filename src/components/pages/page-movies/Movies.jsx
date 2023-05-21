import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './style/movies-style.css'

export const Movies = () => {
    const [data, setData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = () => {
      const parsed_title = localStorage.getItem('film');
      const title = JSON.parse(parsed_title);
      const API_KEY = 'aa1985f4';
      const API_URL =
        `https://www.omdbapi.com/?s=${title}&plot=full&apikey=` + API_KEY;
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

    const onClick = () => {
        navigate('/')
    }

    return (
        <div className='movies'>
            <div className="request">
                <p><strong>Вот, что удалось найти по вашему запросу</strong></p>
            </div>
            <div>
                <button onClick={onClick} className="button-back">Назад к поиску</button>
            </div>
            <div className="table">
                {data && data.Search.map((movie) => (
                    <div className='movie-info' key={movie.imdbID}>
                        <img src={movie.Poster} alt={movie.Title}/>
                        <div className="movie-details">
                            <h2>{movie.Title}</h2>
                            <p><strong>Год выпуска:</strong> {movie.Year}</p>
                            <p><strong>Тип фильма:</strong> {movie.Type === 'movie' ? 'Фильм': 'Сериал'}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}