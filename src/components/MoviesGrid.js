import React, {useState, useEffect} from "react";
import '../styles.css';

export default function MoviesGrid() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch("movies.json")
            .then((response) => response.json())
            .then((data) => {
                setMovies(data);
            })
            .catch((error) => console.error("Error fetching movies:", error));
    }, []);

    return(
        <div className="movies-grid">
            {movies.map((movie) => (
                <div key={movie.id} className="movie-card">
                    <img src={`images/${movie.image}`} alt={movie.title} className="movie-poster" />
                    <div className="movie-card-info">
                        <h3 className="movie-title">{movie.title}</h3>
                        <p className="movie-genre">{movie.genre}</p>
                        <p className="movie-rating">Rating: {movie.rating}</p>
                    </div>
                </div>
            ))}

        </div>
    );
}