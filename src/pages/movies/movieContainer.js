import useMovies from "../../hooks/useMovies";
import Movies from "./movies";

const MoviesContainer = () => {
  const {
    moviesData,
    handleFavovirtesAdd,
    handleFavovirtesRemoveMovie,
    handleFavovirtesClear,
  } = useMovies();
  return (
    <Movies
      moviesData={moviesData}
      handleFavovirtesAdd={handleFavovirtesAdd}
      handleFavovirtesRemoveMovie={handleFavovirtesRemoveMovie}
    />
  );
};

export default MoviesContainer;
