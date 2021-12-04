import React, { useState } from "react";
import "./Bottom.css";
import { FaGamepad, FaBuffer } from "react-icons/fa";
import { GiRadarSweep } from "react-icons/gi";
import { RiArrowGoForwardFill } from "react-icons/ri";
import { data } from "./data";
import ReactCardFlip from "react-card-flip";

/*
1. save current idx
2. search through imgs with highes similarity
3. letzte 10 idx von array picken
4. an bottom geben

// BOTTOM drehen??????

*/

const products = data;

const Bottom = ({ flipCard, currentId }) => {
  console.log("CURRENT ID");
  console.log(currentId);

  const [bestFive, setBestFive] = useState([]);
  const [filterActive, setFilterActive] = useState(false);
  const [frontBack, setFrontBack] = useState(true);

  const closestFive = () => {
    setFilterActive(true);
    setFrontBack((front) => !front);
    const currentshoe = products.filter(
      (product) => product.name == currentId
    )[0];
    let cleanProducts = products.filter((product) => product.name != currentId);

    let Idx = [];
    for (let i = 0; i < cleanProducts.length; i++) {
      let runningDist =
        (cleanProducts[i].x - currentshoe.x) ** 2 +
        (cleanProducts[i].y - currentshoe.y) ** 2;

      Idx.push({ distance: runningDist, name: cleanProducts[i].name });
    }

    var result = Array.from(Array(Idx.length).keys()).sort((a, b) =>
      Idx[a].distance < Idx[b].distance
        ? -1
        : (Idx[b].distance < Idx[a].distance) | 0
    );

    console.log(result);
    console.log(Idx[48].distance);
    console.log(Idx[64].distance);

    const tmpFive = [];
    for (let i = 0; i < 5; i++) {
      tmpFive.push(Idx[result[i]].name);
    }

    setBestFive(tmpFive);
    setFilterActive(true);
  };

  let backbtnstyle = {
    display: `${frontBack ? "none" : "inline-block"}`,
    width: "20%",
    fontWeight: "900",
    height: "1.7rem",
    marginTop: "0.3rem",
    borderRadius: "0.8rem",
    background: "white",
    boxShadow: "rgb(47, 149, 193) 0px 7px 20px -8px",
    color: "rgb(47, 149, 193)",
    textAlign: "center",
    cursor: "pointer",
  }

  return (
    <div className="bottom-outer">
      <ReactCardFlip
        isFlipped={frontBack}
        flipDirection="horizontal"
        className="bottom-card"
        style={{position: "relative", zIndex: "0 !important"}}
      >
        <div className="shoeshow">
          <button className="back" onClick={() => setFrontBack(!frontBack)}>
          </button>
          {data
            .filter((shoe) => bestFive.includes(shoe.name))
            .map((shoe, idx) => {
              let indivStyle = {
                position: "relative",
                height: `${80}px`,
                marginRight: "10px",
                width: `${80}px`,
              };
              return (
                <img
                  className="pic"
                  style={indivStyle}
                  src={`./shoes/${shoe.name}.jpg`}
                />
              );
            })}
        </div>
        <div className="bottom-control">
          <button className="ctrl-btn" onClick={() => closestFive()}>
            List Similar
          </button>
          <button className="ctrl-btn" onClick={() => flipCard(true)}>Map Similar</button>
        </div>
      </ReactCardFlip>
      <button style={backbtnstyle} onClick={() => setFrontBack(!frontBack)}>Back</button>
    </div>
  );
};

{
  /* <ReactCardFlip isFlipped={front} flipDirection="horizontal">
  <Wrapper flipCard={flipCard} setPosition={setPosition} />
  <WrapperBack position={position} />
</ReactCardFlip>; */
}

export default Bottom;

// return (
//   <div className="bottom-outer">
//   <ReactCardFlip isFlipped={front} flipDirection="horizontal">
//       {/* <RiArrowGoForwardFill className="expand"/> */}
//       {filterActive ? (
//         data
//           .filter((shoe) => bestFive.includes(shoe.name))
//           .map((shoe, idx) => {
//             let indivStyle = {
//               position: "relative",
//               height: `${100}px`,
//               marginRight: "10px",
//               width: `${100}px`,
//             };
//             return (
//               <img
//                 className="pic"
//                 style={indivStyle}
//                 src={`./shoes/${shoe.name}.jpg`}
//               />
//             );
//           })
//       ) : (
//         <div className="bottom-control">
//           <button className="ctrl-btn" onClick={() => closestFive()}>
//             List Similar
//           </button>
//           <button className="ctrl-btn" onClick={() => closestFive()}>
//             Map Similar
//           </button>
//         </div>
//       )}
//   </ReactCardFlip>
//   </div>
// );
// };
