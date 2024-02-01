function CountryCard({ country, index }) {
  return (
    <div className="card col-md-5 m-2 p-0" style={{ width: "20rem" }}>
      <img
        src={country.flags.png}
        className="card-img-top border"
        alt="..."
        style={{ height: "15rem" }}
      />
      <div className="card-body">
        <h4 className="card-title text-center">
          {index + 1}: {country.name.common}
        </h4>
        <h6 className="card-title text-center">Capital: {country.capital}</h6>
        <p className="text-center mb-0">
          Poulation: <strong>{country.population}</strong>
        </p>
        <p className="text-center mt-0">
          Area: <strong>{country.area} Sq K.M.</strong>
        </p>
        <p className="text-center mt-0">
          Continent: <strong>{country.continents[0]}</strong>
        </p>
        <p className="text-center">
          <a href={country.maps.googleMaps} target="_blank" rel="noreferrer">
            <button className="btn btn-outline-secondary">
              Location on Map <i className="bi bi-geo-alt-fill"></i>
            </button>
          </a>
        </p>
      </div>
    </div>
  );
}

export default CountryCard;
