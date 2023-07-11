import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ sushis, handleEatSushi }) {
  const [idx, setIdx] = useState(0);

  const handleClick = () => {
    setIdx((prevState) => prevState + 4);
  };

  const allSushi = sushis
    .slice(idx, idx + 4)
    .map((sushi) => (
      <Sushi sushi={sushi} key={sushi.id} handleEatSushi={handleEatSushi} />
    ));

  return (
    <div className="belt">
      {allSushi}
      <MoreButton onClick={handleClick} />
    </div>
  );
}

export default SushiContainer;
