import { combineReducers } from "redux";
import { ADD_MOVIES, ADD_MOVIES_TO_LIST, ADD_SEARCH_RESULT, ADD_TO_FAVROUITE, REMOVE_TO_FAVOURITE, SET_SO_FAVOURITES } from "../actions";

const initialMovieState = {
    list : [],
    favourites : [],
    showFavourites : false
}

export function movies (state = initialMovieState, action){
    switch(action.type){
        case ADD_MOVIES :
            return {
                ...state,
                list : action.movies
            }
        case ADD_TO_FAVROUITE :
            return {
                ...state,
                favourites : [action.movie, ...state.favourites]
            }
        case REMOVE_TO_FAVOURITE :
            return {
                ...state,
                favourites : state.favourites.filter(movie => movie !== action.movie)
            }
        case SET_SO_FAVOURITES : {
            return {
                ...state,
                showFavourites : action.val
            }
        }
        case ADD_MOVIES_TO_LIST : {
            return {
                ...state,
                list : [action.movie, ...state.list]
            }
        }
        default : {
            return state;
        }
    }
}

const initialSearchState = {
    result : {},
    showSearchResults : false
};

export function search (state = initialSearchState, action) {
    switch(action.type){
        case ADD_SEARCH_RESULT: {
            return {
                ...state,
                result : action.movies,
                showSearchResults : true
            }
        }
        default : {
            return state;
        }
    }
}

export default combineReducers ( {
        movies,
        search
});