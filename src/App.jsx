import React from "react";
import Sidebar from "./components/sideBar/Sidebar";
import { Route, Routes } from "react-router-dom";
import AboutMe from "./components/AboutPage/AboutMe";
import FooterPage from "./components/AboutPage/Footer/FooterPage";
import WorkSection from "./components/WorkPage/WorkSection";
import ContactPage from "./components/AboutPage/Contact/ContactPage";

const App = () => {
  return (
    <div>
      <div className="">
        <Sidebar />
      </div>
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/work" element={<WorkSection />} />
        <Route path="/about" element={<ContactPage />} />
      </Routes>
      <FooterPage />
    </div>
  );
};

export default App;
