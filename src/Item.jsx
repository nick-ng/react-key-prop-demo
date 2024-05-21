import { useState } from "react";

export default function Item({ id, text, onDelete }) {
  const [checked, setChecked] = useState(false);

  return (
    <div style={{ margin: "10px 0" }}>
      <label style={{ userSelect: "none" }}>
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => {
            setChecked(e.currentTarget.checked);
          }}
        />
        <span>{text}</span>
      </label>
      <button
        style={{ border: "1px solid black", margin: "0 10px" }}
        onClick={() => {
          onDelete(id);
        }}
      >
        Delete
      </button>
    </div>
  );
}
