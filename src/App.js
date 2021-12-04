import "./App.css";
import { useState } from "react"
// import Wrapper from "./components/Wrapper";
import Wrapper from "./components/Wrapper";
import Watch from "./components/Watch";
import WrapperBack from "./components/WrapperBack";
import ReactCardFlip from 'react-card-flip';

const App = () => {
  const [front, setFront] = useState(false)

  const [position, setPosition] = useState([1000,1000])

  const flipCard = () => {
    setFront(!front)
  }

  return (
    <div className="App">
      <ReactCardFlip
        isFlipped={front}
        flipDirection="horizontal"
      >
        <Wrapper flipCard={flipCard} setPosition={setPosition}/>
        <WrapperBack position={position} flipCard={flipCard}/>
      </ReactCardFlip>
    </div>
  );
};

export default App;
