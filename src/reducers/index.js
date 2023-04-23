import { ADD_MOVIES, ADD_TO_FAVROUITE, REMOVE_TO_FAVOURITE } from "../actions";

const initialMovieState = {
    list : [],
    favourites : []
}

export default function movies (state = initialMovieState, action){
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
        default : {
            return state;
        }
    }
}