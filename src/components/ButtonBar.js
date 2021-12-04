import React from "react";
import "./ButtonBar.css";
import { FaStar, FaHeart } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { GiRadarSweep } from "react-icons/gi";
import { MdNavigateNext } from "react-icons/md"
import { AiOutlineMinus } from "react-icons/ai"
import { GoPlus } from "react-icons/go";

const ButtonBar = ({ id, handleChoice }) => {
  return (
    <div className="btn-wrapper">
      <button
        className="dislike"
        type="button"
        onClick={() => handleChoice(id, "ADD_TO_DISLIKED_PRODUCTS")}
      >
        <AiOutlineMinus className="cross" />
      </button>
      {/* <button
        className="superlike"
        type="button"
        onClick={() => handleChoice(id, "ADD_TO_SUPERLIKED_PRODUCTS")}
      >
        <MdNavigateNext className="star"/>
      </button> */}
      <button
        className="like"
        type="button"
        onClick={() => handleChoice(id, "ADD_TO_LIKED_PRODUCTS")}
      >
        <GoPlus className="heart" />
      </button>
    </div>
  );
};

export default ButtonBar;
