export const MOVIES_FETCHED_SUCCESS = "MOVIES_FETCHED_SUCCESS";
export const MOVIES_FETCHED_REQUEST = "MOVIES_FETCHED_REQUEST";
export const MOVIES_FETCHED_FAILURE = "MOVIES_FETCHED_FAILURE";

export const moviesFetched = (movies) => ({
    type: MOVIES_FETCHED_SUCCESS,
    payload: {movies},
  });

export const moviesRequest = () => ({
    type :MOVIES_FETCHED_REQUEST
});

export const moviesFailure = (error) => ({
    type: MOVIES_FETCHED_FAILURE,
    payload: error,
  });

  