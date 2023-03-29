import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Contacts from "./pages/Contacts";

const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/projects" element={<Project />} />
        <Route exact path="/contact" element={<Contacts />} />
      </Routes>
    </Fragment>
  );
};

export default App;
