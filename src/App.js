import './App.css';
import React, { Component } from 'react';
import {getMovies} from './Services/fakeMovieService'

class App extends Component {
  state = { 
    movies : getMovies({ _id : id})
   } 
   getMove = ()=>{
    console.log(this.state.movies.getMovies._id);
   }
  render() { 
    return (
      <main className='container'>
       <button onClick={this.getMove}>click</button>
    </main>
    );
  }
}
 
export default App;


