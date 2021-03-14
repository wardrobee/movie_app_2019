// Jinny Choi
// Movie App 2019
// Nomad Coders ReactJS로 영화 웹 서비스 만들기

import React from "react";
import axios from "axios";

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
      "https://yts-proxy.now.sh/list_movies.json"
    );
    console.log(movies);
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading } = this.state;
    return (
      <div>
        {isLoading ? "Loading..." : "We are ready"}
      </div>
    );
  }
}

export default App;
