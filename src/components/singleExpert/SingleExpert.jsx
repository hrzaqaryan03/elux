import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
const SingleExpert = () => {

  const expertsData = useSelector((state) => state.experts.experts);
  const params = useParams();

  const selectedExpert = expertsData.find((el) => el.id == params.id)
  console.log(selectedExpert);
  

  return (
    <div style={{ margin: "10px" }}>
      <h1>{selectedExpert.name}</h1>
      <img src={selectedExpert.pic} alt="" />
    </div>
  );
};

export default SingleExpert;
