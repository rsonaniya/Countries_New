import { useEffect, useState } from "react";
import Countries from "./Components/Countries";
import ListGroup from "./Components/ListGroup";
import Loader from "./Components/Loader";
import NavBar from "./Components/NavBar";

function App() {
  const [countries, setCountries] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [continents, setContinents] = useState([]);
  const [selectedContinent, setSelectedContinent] = useState("All");
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const url = "https://restcountries.com/v3.1/all";
    const response = await fetch(url);
    const result = await response.json();
    setCountries(result);
    setContinents([...new Set(result.map((country) => country.continents[0]))]);
    setIsLoading(false);
  };

  const handleContinentSelect = (continent) => {
    setIsLoading(true);
    setSelectedContinent(continent);
    setSearchValue("");
    setTimeout(() => {
      setIsLoading(false);
    }, 200);
  };

  const handleSort = (countries) => {
    setIsLoading(true);
    setSearchValue("");
    setCountries(countries);
    setTimeout(() => {
      setIsLoading(false);
    }, 200);
  };

  const handleSearchItem = (searchValue) => {
    setSearchValue(searchValue);
  };
  let filteredCountries =
    selectedContinent === "All"
      ? countries
      : countries.filter(
          (country) => country.continents[0] === selectedContinent
        );

  let searchedCountries = filteredCountries.filter((country) =>
    country.name.common.toLowerCase().includes(searchValue.toLowerCase())
  );

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <NavBar
        onSearchItem={handleSearchItem}
        onSortItem={handleSort}
        countries={countries}
      />

      <div className="row">
        <div className="col-md-2">
          <ListGroup
            continents={continents}
            onContinentSelect={handleContinentSelect}
            isLoading={isLoading}
          />
        </div>

        <div className="col-md-10">
          {isLoading ? <Loader /> : <Countries countries={searchedCountries} />}
        </div>
      </div>
    </div>
  );
}

export default App;
