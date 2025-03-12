export const BOOKS_FETCHED_SUCCESS = "BOOKS_FETCHED_SUCCESS";
export const BOOKS_FETCHED_REQUEST = "BOOKS_FETCHED_REQUEST";
export const BOOKS_FETCHED_FAILURE = "BOOKS_FETCHED_FAILURE";

export const booksFetched = (books) => ({
    type: BOOKS_FETCHED_SUCCESS,
    payload: {books},
  });

export const booksRequest = () => ({
    type :BOOKS_FETCHED_REQUEST
});

export const booksFailure = (error) => ({
    type: BOOKS_FETCHED_FAILURE,
    payload: error,
  });

  