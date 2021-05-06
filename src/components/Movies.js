import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ id, year, title, summary, poster, rating, genres }) {
  return (
    <li className="movie">
      <img className="movie__poster" src={poster} alt={title} title={title} />
      <div className="movie__data">
        <h3 className="movie__title">{title}</h3>
        <h4 className="movie__year">{year}</h4>
        <ul className="movie__genres">
          {genres.map((genre, index) => (
            <li key={index} className="genres__genre">
              {genre}
            </li>
          ))}
        </ul>
        <h5 className="movie__rating">
          <span>{rating}/10.0</span>
        </h5>
        <p className="movie__summary">{summary.slice(0, 150)}</p>
      </div>
    </li>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
