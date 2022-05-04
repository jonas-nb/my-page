import React from "react";
import Sidebar from "./01 - header/sideBar/Sidebar";
import { Route, Routes } from "react-router-dom";
import AboutMe from "./02 - main/AboutMe";
import FooterPage from "./03 - footer/FooterPage";
import WorkSection from "./02 - main/WorkPage/WorkSection";
import ContactPage from "./02 - main/Contact/ContactPage";
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
