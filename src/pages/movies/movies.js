import MovieItem from "./movieItem";

const Movies = ({moviesData}) => {

    const {loading, movies} = moviesData;
    console.log(movies);

    return (
<div className="books-container">
            {loading? <h1>Loading...</h1>:
            <div>
            <h1 className="books-title">Books</h1>
            <table className="books-table">
                <thead>
                    <tr>
                        <th>Movie Name</th>
                        <th>Release date</th>
                    </tr>
                </thead>
                <tbody>
                    {movies.map((movie, index) => (                    
                    <MovieItem key={index} movie={movie} />
                    ))}
                </tbody>
            </table>
            </div>
            }
        </div>
    );
}

export default Movies;