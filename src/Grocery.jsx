import { useState } from "react";

const initialList = ["Bakery and Bread.", "Pasta and Rice."];

export const Grocery = () => {
  const [initialItem, setInitialItem] = useState(initialList);
  const [grocery, setGrocery] = useState("");
  const [addedItem, setAddedItem] = useState([]);

  const addItem = () => {
    grocery.trim()
      ? setInitialItem((initialItem) => [...initialItem, grocery])
      : setInitialItem(initialItem);
    setGrocery("");
  };

  const markAsDone = (currentItem) => {
    setAddedItem((pre) => [...pre, currentItem]);
    const filterGrocery = initialItem.filter((item) => item !== currentItem);
    setInitialItem(filterGrocery);
  };

  return (
    <div>
      <h1>
        <sup>
          <small> my </small>
        </sup>
        Grocery List...
      </h1>
      <input
        className="input-field"
        placeholder="List your grocery"
        type="text"
        value={grocery}
        onChange={(e) => setGrocery(e.target.value)}
      />
      <button onClick={addItem}> Add item</button>

      {initialItem.map((item, index) => (
        <p className="addedItem" key={index}>
          <input onChange={() => markAsDone(item)} type="checkbox" /> {item}
        </p>
      ))}

      <h1>Added Item </h1>
      {addedItem.map((item, index) => (
        <p className="addedItem" key={index}>
          {" "}
          {item}{" "}
        </p>
      ))}
    </div>
  );
};
