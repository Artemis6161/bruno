import { useState } from "react";

function ListData() {
  const [lists, setLists] = useState([]);
  const [count, setCount] = useState(1);
  function addItem() {
    const newitem = "item " + count;
    setLists((prevList) => {
      return [...prevList, newitem];
    });
    setCount((prevCount) => {
      return prevCount + 1;
    });
  }
  return (
    <>
      <h3>List</h3>
      <button onClick={() => addItem()}>add item</button>
      <ul>
        {lists.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListData;
