import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../scss/style.scss";

import { Home } from "../components/page-home/home";
import { Movies } from "../components/page-movies/Movies";
import { Info } from "../components/page-info/Info";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/page-info" element={<Info />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
