import { useEffect } from "react";
import {
  addFavoriteMovie,
  clearFavorites,
  moviesFailure,
  moviesFetched,
  moviesRequest,
  removeFavoriteMovie,
} from "../redux/moviesRedux/actions";
import useDispatchedAction from "./useDispatchedAction";
import { useSelector } from "react-redux";
import axios from "axios";

const useMovies = () => {
  const handleFetchMoviesFailure = useDispatchedAction(moviesFailure);
  const handleFetchedMoviesRequest = useDispatchedAction(moviesRequest);
  const handleFetchedMoviesSuccess = useDispatchedAction(moviesFetched);

  const handleFavovirtesAdd = useDispatchedAction(addFavoriteMovie);
  const handleFavovirtesRemoveMovie = useDispatchedAction(removeFavoriteMovie);
  const handleFavovirtesClear = useDispatchedAction(clearFavorites);
  const moviesData = useSelector((store) => store.movies);
  useEffect(() => {
    if (moviesData.movies.length > 0) return;
    else {
      handleFetchedMoviesRequest();
      axios
        .get("https://api.potterdb.com/v1/movies")
        .then(function (response) {
          handleFetchedMoviesSuccess(response.data.data);
        })
        .catch(function (error) {
          handleFetchMoviesFailure(error);
        });
    }
  }, []);

  return {
    moviesData,
    handleFavovirtesAdd,
    handleFavovirtesRemoveMovie,
    handleFavovirtesClear,
  };
};

export default useMovies;
