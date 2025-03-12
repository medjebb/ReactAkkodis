import { MOVIES_FETCHED_FAILURE, MOVIES_FETCHED_REQUEST, MOVIES_FETCHED_SUCCESS } from "./actions";

const initialState = {
    movies: [],
    loading: true,
};

const moviesReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case MOVIES_FETCHED_SUCCESS :
            return { ...state, movies: payload.movies, loading: false };
        case MOVIES_FETCHED_REQUEST:
            return { ...state, loading: true };
        case MOVIES_FETCHED_FAILURE:
            return { ...state, loading: false ,errors:payload};
        default:
            return state;
    }
}

export default moviesReducer;