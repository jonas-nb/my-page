import React from "react";
import { Routes, Route } from "react-router-dom";
import PageCarousel from "./PageCarousel";
import Slider from "react-perfect-slider";
const WorkSection = (props) => {
  return (
    <div>
      {/* section carousel */}{" "}
      <Slider
        renderControls={(next, previous) => [
          <button className="" onClick={previous}>
            Previous
          </button>,
          <button onClick={next}>Next</button>,
        ]}
      >
        <div>
          <PageCarousel
            title="Advice App"
            about="Application made with React.js, it consumes an api that randomly returns advice."
            imgEnd="https://images.pexels.com/photos/220147/pexels-photo-220147.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
            code="https://github.com/jonas-nb/AdviceApp"
            page="https://62715e70d8c4d800b5046c5d--stirring-jalebi-9adf6d.netlify.app/"
          />
        </div>
        <div>
          {" "}
          <PageCarousel
            title="Pokeinit"
            about="Application made with React.js, it consumes a super fun api with the Japanese anime 'Pokemon' contains the first generation of pokemons."
            imgEnd="https://images.pexels.com/photos/1310847/pexels-photo-1310847.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
            code="https://github.com/jonas-nb/PokeInit"
            page="https://fancy-chebakia-587538.netlify.app/"
          />
        </div>
      </Slider>
      <Routes></Routes>
    </div>
  );
};

export default WorkSection;
