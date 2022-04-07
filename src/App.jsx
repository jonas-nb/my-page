import React from "react";
import Sidebar from "./components/sideBar/Sidebar";
import { Route, Routes } from "react-router-dom";
import AboutMe from "./components/AboutPage/AboutMe";
import FooterPage from "./components/AboutPage/Footer/FooterPage";
import WorkSection from "./components/WorkPage/WorkSection";

const App = () => {
  return (
    <div>
      <Sidebar />
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/work" element={<WorkSection />} />
      </Routes>
      <FooterPage />
    </div>
  );
};

export default App;
