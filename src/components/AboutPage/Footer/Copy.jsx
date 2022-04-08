import React, { useState, useEffect } from "react";
const Copy = () => {
  let [year, setYear] = useState(0);
  useEffect(() => {
    addDate();
  }, []);
  //function that updates date
  const addDate = () => {
    let data = new Date();
    setYear(data.getFullYear());
    console.log(typeof year);
  };
  return (
    <div className=" mt-10 h-12 text-white bg-black text-center flex items-center justify-center">
      <h1>copyright &copy; {year} </h1>
    </div>
  );
};

export default Copy;
