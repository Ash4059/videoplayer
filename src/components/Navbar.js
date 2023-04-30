import React from "react";
import { addMoviesToList, handleMovieSearch } from "../actions";
import { connect } from '..';

class Navbar extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            showSearchResult : true,
            searchText : ''
        }
    }

    handleAddToMovies = (movie) => {
        this.props.dispatch(addMoviesToList(movie));
        this.setState({
            searchText : '',
            showSearchResult : false
        });
        this.handleSearch();
    }

    handleSearch = () => {
        const { searchText } = this.state;
        this.setState({
            showSearchResult : true
        });
        this.props.dispatch(handleMovieSearch(searchText))

    }

    handleChange = (e) => {
        this.setState({
            searchText : e.target.value
        })
        if(this.state.searchText === ""){
            this.handleSearch();
        }
    }

    render(){

        const { result : movie, showSearchResults
        } = this.props;

        return (    
            <div className="nav">
                <div className="search-container">
                    <input onKeyUp={this.handleChange} />
                    <button id="search-btn" onClick={this.handleSearch}>Search</button>
                    {
                        showSearchResults && movie.Response !== 'False' &&
                        <div className="search-results">
                            <div className="search-result">
                                <img src={movie.Poster} alt="search-pic" />
                                <div className="movie-info">
                                    <span>{movie.Title}</span>
                                    <button onClick={()=>this.handleAddToMovies(movie)}>
                                        Add to Movies
                                    </button>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        );
    }
}

function mapStateToProps({search}){
    return {
        search
    }
}

export default connect(mapStateToProps)(Navbar);