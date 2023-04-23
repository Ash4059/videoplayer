import React from 'react';
import '../styles/App.css';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import { data } from '../data';
import { addMovies } from '../actions';

class App extends React.Component{

  componentDidMount(){

    const { store } = this.props;
    
    store.dispatch(addMovies(data));

    store.subscribe(()=>{
      this.forceUpdate();
    });

  }

  isMovieFavrouite = (movie) => {
    const { favourites } = this.props.store.getState();
    const index = favourites.indexOf(movie);
    if(index !== -1){
      return true;
    }
    return false;
  }

  render(){

    const { list } = this.props.store.getState();
  
    return (
      <div className="App">
        <Navbar />
        <div className='main'>
          <div className='tabs'>
            <div className='tab'>Movies</div>
            <div className='tab'>Favrouites</div>
          </div>
          <div className='list'>
            {
              list.map((movie,index) => (
                <MovieCard 
                  movie={movie} 
                  key={`movie-${index}`} 
                  dispatch = {this.props.store.dispatch} 
                  isFavourite = {this.isMovieFavrouite(movie)}
                />
              ))
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
