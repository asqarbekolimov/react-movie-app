import React from "react";
import Movies from "../components/Movies";
import Loader from "../components/Loader";
import Search from "../components/Search";
export default class Main extends React.Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    fetch("https://www.omdbapi.com/?apikey=47654af5&s=fast")
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search }));
  }

  searchMovies = (str, type = "all") => {
    fetch(
      `https://www.omdbapi.com/?apikey=47654af5&s=${str}${
        type !== "all" ? `&type=${type}` : ""
      }`
    )
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search }));
  };

  render() {
    return (
      <div className="container content">
        <Search searchMovies={this.searchMovies} />
        {this.state.loading ? (
          <Loader />
        ) : (
          <Movies movies={this.state.movies} />
        )}
      </div>
    );
  }
}
