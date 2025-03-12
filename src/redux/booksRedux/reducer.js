import { BOOKS_FETCHED_FAILURE, BOOKS_FETCHED_REQUEST, BOOKS_FETCHED_SUCCESS } from "./actions";

const initialState = {
    books: [],
    loading: true,
};

const booksReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case BOOKS_FETCHED_SUCCESS :
            return { ...state, books: payload.books, loading: false };
        case BOOKS_FETCHED_REQUEST:
            return { ...state, loading: true };
        case BOOKS_FETCHED_FAILURE:
            return { ...state, loading: false ,errors:payload};
        default:
            return state;
    }
}

export default booksReducer;