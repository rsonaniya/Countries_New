import { useState } from "react";

function Search({ onSearchItem }) {
  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    setSearch(e.target.value);
    onSearchItem(e.target.value);
  };
  return (
    <div className="text-center">
      <form
        className="d-flex"
        role="search"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          className="form-control me-2"
          placeholder="Search for a Country"
          value={search}
          onChange={(e) => handleChange(e)}
        />
      </form>
    </div>
  );
}

export default Search;
