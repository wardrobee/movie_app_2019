// Jinny Choi
// Movie App 2019
// Nomad Coders ReactJS로 영화 웹 서비스 만들기

import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

// class component
class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };

  // async bc function might take time, so might need to wait
  // can't use await without async
  getMovies = async () => {
    const { data: { data: { movies } } } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false });
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    // es6 Destructuring_assignment
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading
          ? <div className="loader">
              <span className="loader__text">Loading...</span>
            </div>
          : <div className="movies">
              {movies.map(movie => {
                return (
                  <Movie
                    key={movie.id}
                    id={movie.id}
                    year={movie.year}
                    title={movie.title}
                    summary={movie.summary}
                    poster={movie.medium_cover_image}
                    genres={movie.genres}
                  />
                );
              })}
            </div>}
      </section>
    );
  }
}

export default App;
