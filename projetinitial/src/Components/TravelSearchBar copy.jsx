import React, { useState } from "react";
import "./TravelSearshBar.css";

const TravelSearchBar = () => {
  const [source, setSource] = useState("monastir");
  const [destination, setDestination] = useState("Eniso, sousse");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [passengers, setPassengers] = useState(1);

  const swapLocations = () => {
    setSource(destination);
    setDestination(source);
  };

  return (
    <nav className="">
      <div className="TravelSearchBar">
        {/* Source Location */}
        <div className="inputGroup">
          <select
            id="from"
            name="from"
            required
            value={source}
            onChange={(e) => setSource(e.target.value)}
          >
            <option value="">Select a location</option>
            <option value="ENISo">ENISo</option>
            <option value="SAHLOUL">SAHLOUL</option>
            <option value="KALLA KEBIRA">KALLA KEBIRA</option>
            <option value="MESTIR">MESTIR</option>
            <option value="SOUSSE">SOUSSE</option>
            <option value="MEHDIA">MEHDIA</option>
          </select>
        </div>

        {/* Swap Button */}
        <button onClick={swapLocations} className="swapButton">
          🔁
        </button>

        {/* Destination Location */}
        <div className="inputGroup">
          <select
            id="from"
            name="from"
            required
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          >
            <option value="">Select a location</option>
            <option value="ENISo">ENISo</option>
            <option value="SAHLOUL">SAHLOUL</option>
            <option value="KALLA KEBIRA">KALLA KEBIRA</option>
            <option value="MESTIR">MESTIR</option>
            <option value="SOUSSE">SOUSSE</option>
            <option value="MEHDIA">MEHDIA</option>
          </select>
        </div>

        {/* Date Picker */}
        <div className="inputGroup">
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="input"
          />
        </div>

        {/* Passengers Selector */}
        <div className="inputGroup">
          <input
            type="number"
            value={passengers}
            onChange={(e) => setPassengers(e.target.value)}
            className="input"
            min="1"
            placeholder="Nombre de places"
          />
        </div>

        {/* Search Button */}
        <button className="searchButton">Search</button>
      </div>
    </nav>
  );
};

export default TravelSearchBar;
