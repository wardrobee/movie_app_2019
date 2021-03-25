import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";
import { Link } from "react-router-dom";

// if component doesn't need state,
// we can just use function component instead of class component

function Movie({ id, year, title, summary, poster, genres }) {
  return (
    <Link
      to={{
        pathname: `/movie/${id}`,
        state: {
          year,
          title,
          summary,
          poster,
          genres
        }
      }}
    >
      <div className="movie">
        <img src={poster} alt={title} title={title} />
        <div className="movie__data">
          <h3 id="movie__title" style={{ backgroundColor: "cyan" }}>
            {title}
          </h3>
          <h5 className="movie__year">
            {year}
          </h5>
          <p className="movie__summary">
            {summary.slice(0, 140)}...
          </p>
          <ul className="genres">
            {genres.map((genre, index) =>
              <li key={index} className="genres__genre">
                {genre}
              </li>
            )}
          </ul>
        </div>
      </div>
    </Link>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;
