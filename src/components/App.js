import React from 'react';
import '../styles/App.css';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import { data } from '../data';
import { addMovies, setShowFavourites } from '../actions';

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

  onChangeTab = (val) => {
    this.props.store.dispatch(setShowFavourites(val));
  }

  render(){

    const { list, favourites, showFavourites } = this.props.store.getState();

    const displayMovies = showFavourites ? favourites : list;
  
    return (
      <div className="App">
        <Navbar />
        <div className='main'>
          <div className='tabs'>
            <div className={`tab ${showFavourites ? "" : "active-tabs"}`} onClick={() => this.onChangeTab(false)}>Movies</div>
            <div className={`tab ${showFavourites ? "active-tabs" : ""}`} onClick={() => this.onChangeTab(true)}>Favrouites</div>
          </div>
          <div className='list'>
            {
              displayMovies.map((movie,index) => (
                <MovieCard 
                  movie={movie} 
                  key={`movie-${index}`} 
                  dispatch = {this.props.store.dispatch} 
                  isFavourite = {this.isMovieFavrouite(movie)}
                />
              ))
            }
          </div>
          {
            displayMovies.length === 0 && <div className='no-movies'>No movies to display</div>
          }
        </div>
      </div>
    );
  }
}

export default App;
