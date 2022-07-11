import React, { Component } from "react";
import { getMovies } from "../Services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies(),
  };
  getMove = () => {
    console.log(this.state.movies);
  };
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Genere</th>
            <th>Stock</th>
            <th>Rate</th>
          </tr>
        </thead>
        <tbody>
            {this.state.movies.map((movie) => (<tr>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <button className="btn btn-danger sm-2 m-2">Delete</button>
              </tr>
            ))}
        </tbody>
      </table>
    );
  }
}

export default Movies;
