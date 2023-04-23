export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_TO_FAVROUITE = 'ADD_TO_FAVROUITE';
export const REMOVE_TO_FAVOURITE = 'REMOVE_FAVOURITE';
export const SET_SO_FAVOURITES = 'SET_SO_FAVOURITES';

//action creator
export const addMovies = (movies) => {
    return {
        type : ADD_MOVIES,
        movies
      };
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