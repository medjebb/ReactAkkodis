import useMovies from "../../hooks/useMovies";
import Favorites from "./favorites";

const FavoritesContainer = () => {
  const {
    moviesData,
    handleFavovirtesAdd,
    handleFavovirtesRemoveMovie,
    handleFavovirtesClear,
  } = useMovies();

  const favoritesData = moviesData.movies.filter((movie) => movie.isFavorite);
  console.log("Favorites", { favoritesData });

  return (
    <Favorites
      favoritesData={favoritesData}
      handleFavovirtesRemoveMovie={handleFavovirtesRemoveMovie}
      handleFavovirtesClear={handleFavovirtesClear}
    ></Favorites>
  );
};

export default FavoritesContainer;
