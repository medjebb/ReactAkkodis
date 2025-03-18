import { FaHeart } from "react-icons/fa6";
import MovieItem from "../../components/movieItem";
import PropTypes from "prop-types";

const Movies = ({
  moviesData,
  handleFavovirtesAdd,
  handleFavovirtesRemoveMovie,
}) => {
  const { loading, movies } = moviesData;

  return (
    <div className="movies-container">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h1 className="movies-title" style={{ textAlign: "center" }}>
            Movies
          </h1>
          {movies.map((movie) => (
            <div key={movie.id}>
              <MovieItem
                movie={movie}
                handleFavovirtesAdd={handleFavovirtesAdd}
                handleFavovirtesRemoveMovie={handleFavovirtesRemoveMovie}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

Movies.propTypes = {
  moviesData: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
  handleFavovirtesAdd: PropTypes.func.isRequired,
  handleFavovirtesRemoveMovie: PropTypes.func.isRequired,
};

export default Movies;
