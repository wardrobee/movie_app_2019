import React from "react";
import PropTypes from "prop-types";

// if component doesn't need state,
// we can just use function component instead of class component

function Movie({ id, year, title, summary, poster }) {
  return (
    <h4>
      {title}
    </h4>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
};

export default Movie;
