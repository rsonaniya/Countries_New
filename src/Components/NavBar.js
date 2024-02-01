import { useState } from "react";
import Search from "./Search";

function NavBar({ onSearchItem, onSortItem, countries }) {
  const [selectedSort, setSelectedSort] = useState("");
  const selectedStyle = "text-white bg-primary";
  const unSelectedStyle = "bg-primary-subtle";
  const handleSortNameIncrease = () => {
    const sortedCountries = [...countries];
    onSortItem(
      sortedCountries.sort((a, b) => a.name.common.localeCompare(b.name.common))
    );
    setSelectedSort("Sort By Name A-Z");
  };

  const handleSortNameDecrease = () => {
    const sortedCountries = [...countries];
    onSortItem(
      sortedCountries.sort((a, b) => b.name.common.localeCompare(a.name.common))
    );
    setSelectedSort("Sort By Name Z-A");
  };

  const handleSortAreaIncrease = () => {
    const sortedCountries = [...countries];
    onSortItem(sortedCountries.sort((a, b) => a.area - b.area));
    setSelectedSort("Sort By Area ⬆️");
  };

  const handleSortAreaDecrease = () => {
    const sortedCountries = [...countries];
    onSortItem(sortedCountries.sort((a, b) => b.area - a.area));
    setSelectedSort("Sort By Area ⬇️");
  };
  const handleSortPopulationIncrease = () => {
    const sortedCountries = [...countries];
    onSortItem(sortedCountries.sort((a, b) => a.population - b.population));
    setSelectedSort("Sort By Population ⬆️");
  };
  const handleSortPopulationDecrease = () => {
    const sortedCountries = [...countries];
    onSortItem(sortedCountries.sort((a, b) => b.population - a.population));
    setSelectedSort("Sort By Population ⬇️");
  };
  return (
    <nav className="navbar bg-body-tertiary sticky-top navbar-expand">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <button
              onClick={handleSortNameIncrease}
              className={` nav-link active border rounded mx-1 ${
                selectedSort === "Sort By Name A-Z"
                  ? selectedStyle
                  : unSelectedStyle
              }`}
            >
              Sort By Name A-Z
            </button>

            <button
              onClick={handleSortNameDecrease}
              className={` nav-link active border rounded mx-1 ${
                selectedSort === "Sort By Name Z-A"
                  ? selectedStyle
                  : unSelectedStyle
              }`}
            >
              Sort By Name Z-A
            </button>
            <button
              onClick={handleSortAreaIncrease}
              className={` nav-link active border rounded mx-1 ${
                selectedSort === "Sort By Area ⬆️"
                  ? selectedStyle
                  : unSelectedStyle
              }`}
            >
              Sort By Area ⬆️
            </button>
            <button
              onClick={handleSortAreaDecrease}
              className={` nav-link active border rounded mx-1 ${
                selectedSort === "Sort By Area ⬇️"
                  ? selectedStyle
                  : unSelectedStyle
              }`}
            >
              Sort By Area ⬇️
            </button>
            <button
              onClick={handleSortPopulationIncrease}
              className={` nav-link active border rounded mx-1 ${
                selectedSort === "Sort By Population ⬆️"
                  ? selectedStyle
                  : unSelectedStyle
              }`}
            >
              Sort By Population ⬆️
            </button>
            <button
              onClick={handleSortPopulationDecrease}
              className={` nav-link active border rounded mx-1 ${
                selectedSort === "Sort By Population ⬇️"
                  ? selectedStyle
                  : unSelectedStyle
              }`}
            >
              Sort By Population ⬇️
            </button>
          </ul>
          <Search onSearchItem={onSearchItem} />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
