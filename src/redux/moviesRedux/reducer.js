import {
  FAVORITES_ADD_MOVIE,
  FAVORITES_CLEAR,
  FAVORITES_REMOVE_MOVIE,
  MOVIES_FETCHED_FAILURE,
  MOVIES_FETCHED_REQUEST,
  MOVIES_FETCHED_SUCCESS,
} from "./actions";

const initialState = {
  movies: [],
  loading: true,
};

const moviesReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case MOVIES_FETCHED_SUCCESS:
      return {
        ...state,
        movies: payload.movies.map((movie) => ({
          ...movie,
          isFavorite: false,
        })),
        loading: false,
      };
    case MOVIES_FETCHED_REQUEST:
      return { ...state, loading: true };
    case MOVIES_FETCHED_FAILURE:
      return { ...state, loading: false, errors: payload };

    //______favorites________
    case FAVORITES_ADD_MOVIE:
      return {
        ...state,
        movies: state.movies.map((mov) => {
          if (mov.id === payload.movie.id) {
            return { ...mov, isFavorite: true };
          }
          return mov;
        }),
      };
    case FAVORITES_REMOVE_MOVIE:
      return {
        ...state,
        movies: state.movies.map((mov) => {
          if (mov.id === payload.id) {
            return { ...mov, isFavorite: false };
          }
          return mov;
        }),
      };

    case FAVORITES_CLEAR:
      return {
        ...state,
        movies: state.movies.map((mov) => {
          return { ...mov, isFavorite: false };
        }),
      };
    default:
      return state;
  }
};

export default moviesReducer;
