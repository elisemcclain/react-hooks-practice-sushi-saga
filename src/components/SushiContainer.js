import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ sushis, handleEatenSushi }) {
  const [sushiIndex, setSushiIndex] = useState(0);

  const sushiList = sushis
    .slice(sushiIndex, sushiIndex + 4)
    .map((sushi) => (
      <Sushi key={sushi.id} sushi={sushi} handleEatenSushi={handleEatenSushi} />
    ));

  function handleClickButton() {
    setSushiIndex((sushiIndex) => sushiIndex + 4);
  }

  return (
    <div className="belt">
      {sushiList}
      <MoreButton handleClickButton={handleClickButton} />
    </div>
  );
}

export default SushiContainer;
