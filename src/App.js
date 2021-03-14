// Jinny Choi
// Movie App 2019
// Nomad Coders ReactJS로 영화 웹 서비스 만들기

import React from "react";
import axios from "axios";
import Movie from "./Movie";

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
    const { isLoading, movies } = this.state;
    return (
      <div>
        {isLoading
          ? "Loading..."
          : movies.map(movie => {
              console.log(movie);
              return (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                />
              );
            })}
      </div>
    );
  }
}

export default App;
