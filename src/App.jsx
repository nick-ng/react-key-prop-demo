import { useState } from "react";

import "./App.css";
import MyContext from "./MyContext";

import Item from "./Item";

function App() {
  const [items, setItems] = useState([
    { id: 1, text: "hello" },
    { id: 2, text: "world" },
  ]);

  const [counter, setCounter] = useState(0);

  return (
    <MyContext.Provider value={counter}>
      <div>
        <div>
          <button
            style={{ border: "1px solid black" }}
            onClick={() => {
              const newItem = {
                id: Math.max(...items.map((i) => i.id)) + 1,
                text: (Math.random() * 10000).toFixed(0),
              };

              setItems((prevItems) => prevItems.concat(newItem));
            }}
          >
            Add
          </button>
        </div>
        <div>
          {items.map((item, index) => (
            <Item
              key={index}
              data-testid={item.id}
              {...item}
              onDelete={(id) => {
                setItems((prevItems) => prevItems.filter((i) => i.id !== id));
              }}
            />
          ))}
        </div>
        <button
          onClick={() => {
            setCounter((prevCounter) => prevCounter + 1);
          }}
        >
          Increase Counter
        </button>
      </div>
    </MyContext.Provider>
  );
}

export default App;
