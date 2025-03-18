import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/layout/layout";
import MoviesContainer from "./pages/movies/movieContainer";
import FavoritesContainer from "./pages/favorites/favoritesContainer";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MoviesContainer />} />
          <Route path="favorites" element={<FavoritesContainer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
