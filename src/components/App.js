import React from 'react';
import '../styles/App.css';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import { data } from '../data';
import { addMovies, setShowFavourites } from '../actions';
import { connect } from '..';

class App extends React.Component{

  componentDidMount(){

    const { dispatch } = this.props;
    
    dispatch(addMovies(data));

  }

  isMovieFavrouite = (movie) => {
    const { movies } = this.props;
    const { favourites } = movies;
    const index = favourites.indexOf(movie);
    if(index !== -1){
      return true;
    }
    return false;
  }

  onChangeTab = (val) => {
    this.props.dispatch(setShowFavourites(val));
  }

  render(){

    const { movies } = this.props;

    const { list, favourites, showFavourites } = movies;

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
                  dispatch = {this.props.dispatch} 
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

function mapStateToProps(state){
  return {
    movies : state.movies,
    search : state.movie
  }
}

const ConnectedAppComponent = connect(mapStateToProps)(App);

export default ConnectedAppComponent;
