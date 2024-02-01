import { useState } from "react";

function ListGroup({ continents, onContinentSelect }) {
  const [selected, setSelected] = useState("All");

  const handleSelect = (continent) => {
    setSelected(continent);
    onContinentSelect(continent);
  };

  return (
    <ul className="list-group mx-2 my-2 sticky-center">
      {continents.length !== 0 && (
        <li
          onClick={() => handleSelect("All")}
          className={`list-group-item ${selected === "All" ? "active" : ""}`}
        >
          All Countries
        </li>
      )}
      {continents.map((continent) => (
        <li
          key={continent}
          onClick={() => handleSelect(continent)}
          className={`list-group-item ${
            selected === continent ? "active" : ""
          }`}
        >
          {continent}
        </li>
      ))}
    </ul>
  );
}

export default ListGroup;
