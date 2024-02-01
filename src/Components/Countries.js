import CountryCard from "./CountryCard";

function Countries({ countries }) {
  return (
    <div className="row" style={{ height: "80vh", overflowY: "scroll" }}>
      {countries.map((country) => (
        <CountryCard
          key={country.name.official}
          index={countries.indexOf(country)}
          country={country}
        />
      ))}
    </div>
  );
}

export default Countries;
