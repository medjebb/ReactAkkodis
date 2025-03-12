import React from "react";
import BooksContainer from "./pages/books/BooksContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/layout/layout";

const App = () => {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<BooksContainer />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
};

export default App;
