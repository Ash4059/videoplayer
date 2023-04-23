export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_TO_FAVROUITE = 'ADD_TO_FAVROUITE';
export const REMOVE_TO_FAVOURITE = 'REMOVE_FAVOURITE';

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