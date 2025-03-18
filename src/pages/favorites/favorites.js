import { BiTrash } from "react-icons/bi";
import MovieItem from "../../components/movieItem";

const Favorites = ({
  favoritesData,
  handleFavovirtesRemoveMovie,
  handleFavovirtesClear,
}) => {
  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", color: "#333", marginBottom: "20px" }}>
        Favorites
      </h1>
      <button
        onClick={() => handleFavovirtesClear()}
        style={{
          display: "block",
          //   margin: "0 auto 20px auto",
          padding: "10px 20px",
          backgroundColor: "#ff4d4d",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        <BiTrash style={{ marginBottom: "-2px" }} /> Clear
      </button>
      {favoritesData.length === 0 ? (
        <p style={{ textAlign: "center", color: "#777" }}>
          No favorite movies added.
        </p>
      ) : (
        favoritesData.map((movie, index) => (
          <MovieItem
            key={index}
            movie={movie}
            handleFavovirtesRemoveMovie={handleFavovirtesRemoveMovie}
          />
        ))
      )}
    </div>
  );
};

export default Favorites;
