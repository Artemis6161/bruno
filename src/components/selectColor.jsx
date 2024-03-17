import { useState } from "react";

function SelectColor() {
  //   const [color, setColor] = useState("blue");
  //   const [brand, setBrand] = useState("bmw");
  const [vtype, setVtype] = useState({
    color: "red",
    brand: "hundai",
  });
  function changeData() {
    setVtype((prev) => {
      return { ...prev, color: "green" };
    });
  }
  return (
    <>
      <h1>hello</h1>

      <p>{vtype.brand}</p>
      <p>{vtype.color}</p>
      <button onClick={() => changeData()}>change</button>
    </>
  );
}

export default SelectColor;
