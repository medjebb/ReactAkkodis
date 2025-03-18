export const MOVIES_FETCHED_SUCCESS = "MOVIES_FETCHED_SUCCESS";
export const MOVIES_FETCHED_REQUEST = "MOVIES_FETCHED_REQUEST";
export const MOVIES_FETCHED_FAILURE = "MOVIES_FETCHED_FAILURE";
export const FAVORITES_ADD_MOVIE = "FAVORITES_ADD_MOVIE";
export const FAVORITES_REMOVE_MOVIE = "FAVORITES_REMOVE_MOVIE";
export const FAVORITES_CLEAR = "FAVORITES_CLEAR";

export const moviesFetched = (movies) => ({
  type: MOVIES_FETCHED_SUCCESS,
  payload: { movies },
});

export const moviesRequest = () => ({
  type: MOVIES_FETCHED_REQUEST,
});

export const moviesFailure = (error) => ({
  type: MOVIES_FETCHED_FAILURE,
  payload: error,
});

export const addFavoriteMovie = (movie) => ({
  type: FAVORITES_ADD_MOVIE,
  payload: { movie },
});

export const removeFavoriteMovie = (id) => ({
  type: FAVORITES_REMOVE_MOVIE,
  payload: { id },
});

export const clearFavorites = () => ({
  type: FAVORITES_CLEAR,
});
