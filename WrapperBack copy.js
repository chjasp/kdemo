import React, { useState, setState } from "react";
import "./WrapperBack.css";
import Card from "./src/components/Card";
import Bottom from "./src/components/Bottom";
import data from "./src/data.json";
import {
  FaCaretDown,
  FaCaretUp,
  FaCaretLeft,
  FaCaretRight,
} from "react-icons/fa";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
`;

const WrapperBack = () => {
  const [visible, setVisible] = useState(false);
  const [zoom, setZoom] = useState(1);

  const feedback = (e) => {
    // console.log("zoom level");
    // if (e.state.scale > 0.7) {
    //   setVisible((visible) => true);
    // } else {
    //   setVisible((visible) => false);
    // }

    // setZoom(e.state.scale);
    console.log(e.state.scale);
  };

  return (
    <>
      <div className="div-wrapper">
        <TransformWrapper
          initialScale={0.1}
          minScale={0.1}
          maxScale={10}
          initialPositionX={0}
          initialPositionY={0}
          onZoom={(e) => feedback(e)}
        >
          {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
            <TransformComponent>
              <div id="bg" className="outer-wrap back">
                <img
                  className="pic"
                  style={{ top: "800px", left: "1600px" }}
                  src="./shoes/49.jpg"
                />
                <img
                  className="pic"
                  style={{ top: "800px", left: "1500px" }}
                  src="./shoes/51.jpg"
                />
                <img
                  className="pic"
                  style={{ top: "600px", left: "1600px" }}
                  src="./shoes/53.jpg"
                />
                <img
                  className="pic"
                  style={{ top: "600px", left: "1500px" }}
                  src="./shoes/54.jpg"
                />
                <img
                  className="pic"
                  style={{ top: "0", left: "0" }}
                  src="./shoes/54.jpg"
                />
              </div>
            </TransformComponent>
          )}
        </TransformWrapper>
        <button onClick={() => setVisible((visible) => !visible)}>
          YOOOOO
        </button>
      </div>
    </>
  );
};

export default WrapperBack;

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
