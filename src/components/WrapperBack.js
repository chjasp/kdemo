import React, { useState } from "react";
import { PanZoom } from "react-easy-panzoom";
import { data } from "./data";
import { MdLocationPin } from "react-icons/md";
import "./WrapperBack.css";

const WrapperBack = ( {position, flipCard} ) => {
  const [zoom, setZoom] = useState(1000);

  const handleStateChange = ({ x, y, scale, angle }) => {
    let newZoom = 1000;
    console.log(x)
    console.log(y)
    console.log(scale)
    if (scale < 0.2) {
      newZoom = 1000;
    }

    if (scale > 0.2 && scale < 0.6) {
      newZoom = 500;
    }

    if (scale > 0.6) {
      newZoom = 100;
    }

    if (newZoom != zoom) {
      setZoom(newZoom);
    }
  };

  let radarStyle = {
    position: "absolute",
    left: `${position[0]}px`,
    top: `${position[1]}px`
  };

  let backbigstyle = {
    width: "40%",
    position: "absolute",
    fontWeight: "900",
    height: "1.7rem",
    marginTop: "0.3rem",
    bottom: "1.5rem",
    borderRadius: "0.8rem",
    background: "white",
    boxShadow: "rgb(47, 149, 193) 0px 7px 20px -8px",
    color: "rgb(47, 149, 193)",
    textAlign: "center",
    cursor: "pointer",
  }

  return (
    <div className="div-wrapper">
      <PanZoom onStateChange={handleStateChange}>
        <div className="map">
        <a class="intro-banner-vdo-play-btn pinkBg" style={radarStyle} target="_blank">
        <MdLocationPin className="radar-back" />
          <i class="glyphicon glyphicon-play whiteText" aria-hidden="true"></i>
          <span class="ripple pinkBg"></span>
          <span class="ripple pinkBg"></span>
          <span class="ripple pinkBg"></span>
        </a>
          {data
            .filter((shoe) => zoom == 100 ? true : shoe.zoomClearance == zoom)
            .map((shoe, idx) => {
              console.log(shoe.name)
              console.log((shoe.order % (2000 / zoom)) * zoom)
              let indivStyle = {
                position: "absolute",
                height: `${zoom}px`,
                width: `${zoom}px`,
                left: `${
                  zoom == 100 ? shoe.x : (shoe.order % (2000 / zoom)) * zoom
                }px`,
                top: `${
                  zoom == 100 ? shoe.y : Math.floor(shoe.order / (2000 / zoom)) * zoom
                }px`,
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
      </PanZoom>
      <button style={backbigstyle} onClick={() => flipCard(false)}>Back</button>
    </div>
  );
};

export default WrapperBack;

{
  /* <div id="bg" className="outer-wrap back"></div> */
}

{
  /* <div className="div-wrapper">
          <div id="bg" className="outer-wrap back">
            
            <div className="card-wrapper back">
              <img className="pic" src={`./shoes/1.jpg`} />
            </div>
            <div className="card-wrapper back">
              <img className="pic" src={`./shoes/2.jpg`} />
            </div>
            <div className="card-wrapper back">
              <img className="pic" src={`./shoes/3.jpg`} />
            </div>
            <div className="card-wrapper back">
              <img className="pic" src={`./shoes/4.jpg`} />
            </div>
          </div>
        </div> */
}

{
  /* <div className="bottom-control">
              <div className="vertical-control" onClick={addE}>
                <FaCaretUp className="arrow" />
                <FaCaretDown className="arrow" />
              </div>
              <div className="all-control">
                <div className="vertical-control component">
                  <FaCaretUp className="ac-arrow" />
                  <FaCaretDown className="ac-arrow" />
                </div>
                <div className="horizontal-control">
                  <FaCaretLeft className="ac-arrow" />
                  <FaCaretRight className="ac-arrow" />
                </div>
              </div>
            </div> */
}
