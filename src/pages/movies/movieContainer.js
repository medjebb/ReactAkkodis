import useMovies from "../../hooks/useMovies";
import Movies from "./movies"

const MoviesContainer = () => {
const moviesData = useMovies();

return <Movies moviesData={moviesData}  />;
}

export default MoviesContainer;