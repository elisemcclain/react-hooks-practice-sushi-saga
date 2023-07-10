import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([]);
  const [money, setMoney] = useState(120);

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((sushis) => {
        const sushiEaten = sushis.map((sushi) => {
          return { ...sushi, eaten: false };
        });
        setSushis(sushiEaten);
      });
  }, []);

  function handleEatenSushi(eatenSushi) {
    if (money >= eatenSushi.price) {
      const updatedSushis = sushis.map((sushi) => {
        if (eatenSushi.id === sushi.id) return { ...sushi, eaten: true };
        return sushi;
      });

      setSushis(updatedSushis);
      setMoney((money) => money - eatenSushi.price);
    } else {
      alert("no mo' money!");
    }
  }

  const eatenSushis = sushis.filter((sushi) => sushi.eaten);
  return (
    <div className="app">
      <SushiContainer sushis={sushis} handleEatenSushi={handleEatenSushi} />
      <Table plates={eatenSushis} money={money} />
    </div>
  );
}

export default App;
