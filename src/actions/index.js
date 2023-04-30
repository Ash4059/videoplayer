export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_MOVIES_TO_LIST = 'ADD_MOVIES_TO_LIST';
export const ADD_TO_FAVROUITE = 'ADD_TO_FAVROUITE';
export const REMOVE_TO_FAVOURITE = 'REMOVE_FAVOURITE';
export const SET_SO_FAVOURITES = 'SET_SO_FAVOURITES';
export const ADD_SEARCH_RESULT = 'ADD_SEARCH_RESULT';

//action creator
export const addMovies = (movies) => {
    return {
        type : ADD_MOVIES,
        movies
      };
}

export const addMoviesToList = (movie) => {
    return {
        type : ADD_MOVIES_TO_LIST,
        movie
    }
}

export const addFavourite = (movie) => {
    return {
        type : ADD_TO_FAVROUITE,
        movie
    }
}

export const removeFavourite = (movie) => {
    return {
        type : REMOVE_TO_FAVOURITE,
        movie
    }
}

export const setShowFavourites = (val) => {
    return {
        type : SET_SO_FAVOURITES,
        val
    }
}

export const handleMovieSearch = (text) => {
    const url = `https://www.omdbapi.com/?apikey=3ca5df7&t=${text}`;

    return function(dispatch){

        fetch(url)
            .then(response =>  response.json())
            .then(movies => {
                dispatch(addMoviesToSearchList(movies))
            })

    }

}

export const addMoviesToSearchList = (movies) => {
    return {
        type : ADD_SEARCH_RESULT,
        movies
    }
}