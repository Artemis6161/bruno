import { useState } from "react";
import GuessRes from "./GuessRes";
const ranNum = Math.floor(Math.random() * 10) + 1;

function GuessNum() {
  const [num, setNum] = useState(0);
  function handleChange(e) {
    setNum(e.target.value);
  }
  return (
    <div className="container">
      <div className="border  border-white  ">
        <label htmlFor="inp">Guess the number betweeen 1 and 10</label>
        <br />
        <input type="text" name="inp" id="inp" onChange={handleChange} />
      </div>
      <GuessRes ranNum={ranNum} num={num} />
    </div>
  );
}

export default GuessNum;
