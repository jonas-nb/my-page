import React from "react";
import Header from "./Components/Headers/Header";
import { Route, Routes } from "react-router-dom";
import Teste from "./Components/Headers/Teste";
const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Teste />} />
      </Routes>
    </div>
  );
};

export default App;
