import { FaHeart } from "react-icons/fa6";

const MovieItem = ({
  movie,
  handleFavovirtesAdd,
  handleFavovirtesRemoveMovie,
}) => {
  const {
    attributes: { title, release_date, running_time, poster },
  } = movie;
  const isFavorite = movie.isFavorite;

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        maxWidth: "600px",
        margin: "20px auto",
        backgroundColor: "#f9f9f9",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      <div style={{ marginRight: "20px" }}>
        {isFavorite ? (
          <button
            onClick={() => handleFavovirtesRemoveMovie(movie.id)}
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            <FaHeart color="grey" />
          </button>
        ) : (
          <button
            onClick={() => handleFavovirtesAdd(movie)}
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            <FaHeart color="red" />
          </button>
        )}

        <h1
          style={{
            fontSize: "24px",
            marginBottom: "10px",
            color: "#333",
          }}
        >
          {title}
        </h1>
        <h2
          style={{
            fontSize: "18px",
            marginBottom: "5px",
            color: "#666",
          }}
        >
          {release_date}
        </h2>
        <h3
          style={{
            fontSize: "16px",
            color: "grey",
          }}
        >
          {running_time}
        </h3>
      </div>
      <img
        src={poster}
        alt={`${title} poster`}
        style={{
          width: "150px",
          height: "auto",
          borderRadius: "10px",
        }}
      />
    </div>
  );
};

export default MovieItem;
