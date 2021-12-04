import React from "react";
import "./Card.css";
import ButtonBar from "./ButtonBar";

const Card = ( {id, handleChoice} ) => {
  return (
    <div className="card-wrapper">
      <img className="pic-front" src={`./shoes/${id}.jpg`} />
      <ButtonBar id={id} handleChoice={handleChoice} />
    </div>
  );
};

export default Card;
