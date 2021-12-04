import React, { useState, setState } from "react";
import { PanZoom } from "react-easy-panzoom";
import styled from "styled-components";
import { data } from "./data";
import "./WrapperBack.css";

const WrapperBack = () => {
  const [zoom, setZoom] = useState(1000);

  const handleStateChange = ({ x, y, scale, angle }) => {
    let newZoom = 1000;
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

  return (
    <PanZoom onStateChange={handleStateChange}>
      <div className="map">
        {data
          .filter((shoe) => shoe.zoomClearance >= zoom)
          .map((shoe, idx) => {
            let indivStyle = {
              position: "absolute",
              height: `${zoom}px`,
              width: `${zoom}px`,
              left: `${zoom == 100 ? shoe.x : (idx % (2000 / zoom)) * zoom}px`,
              top: `${
                zoom == 100 ? shoe.y : Math.floor(idx / (2000 / zoom)) * zoom
              }px`,
            };
            return (
              <div>
                <img
                  className="pic"
                  style={indivStyle}
                  src={`./shoes/${shoe.name}.jpg`}
                  onClick={() => console.log(shoe.name)}
                />
              </div>
            );
          })}
      </div>
    </PanZoom>
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
