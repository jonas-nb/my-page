import React from "react";
import Sidebar from "./components/sideBar/Sidebar";
import { Route, Routes } from "react-router-dom";
import AboutMe from "./components/AboutPage/AboutMe";

const App = () => {
  return (
    <div>
      <Sidebar />
      <Routes>
        <Route path="/" element={<AboutMe />} />
      </Routes>
    </div>
  );
};

export default App;
