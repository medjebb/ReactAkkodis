import { useState } from "react";
import "./Header.css"; // Import a CSS file for styling
import { Link } from "react-router-dom";
const Header = () => {
  const [movies, setMovies] = useState(false);
  const [books, setBooks] = useState(false);
  const [favorites, setFavorites] = useState(false);

  return (
    <header className="header">
      <h1 className="header-title">HARRY POTTER</h1>
      <nav className="header-nav">
        <ul>
          <li>
            <Link
              to="books"
              className={books ? "current" : ""}
              onClick={() => {
                setBooks(true);
                setMovies(false);
                setFavorites(false);
              }}
            >
              Books
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className={movies ? "current" : ""}
              onClick={() => {
                setBooks(false);
                setMovies(true);
                setFavorites(false);
              }}
            >
              Movies
            </Link>
          </li>
          <li>
            <Link
              to="favorites"
              className={favorites ? "current" : ""}
              onClick={() => {
                setBooks(false);
                setMovies(false);
                setFavorites(true);
              }}
            >
              Favorites
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
