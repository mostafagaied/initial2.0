import React, { useEffect, useState } from "react";
import "./Accueill.css"; // Ensure this matches the exact file name
import RideCard from "./others/RideCard";
import SortFilter from "./others/SortFilter";

import TravelSearchBar from "../Components/TravelSearchBar";

const Accueil = () => {
  const [user, setUser] = useState({
    displayName: "John Doe",
    email: "john.doe@example.com",
  });

  return (
    <div>
      <TravelSearchBar />

      <div className="accueil">
        <div className="sidebar">
          {user ? (
            <div className="user-info">
              <h2>Welcome, {user.displayName}</h2>
              <p>Email: {user.email}</p>
            </div>
          ) : (
            <p>Please log in.</p>
          )}
        </div>

        <div>
          <RideCard />
          
          <RideCard />
          <RideCard />
          <RideCard />
         
         
        </div>
        <div
      style={{
        display: "flex",
        justifyContent: "right",
        alignItems: "center",
        height: "46vh",
        backgroundColor: "#f9f9f9",
      }}
     
    >
      <SortFilter />
    </div>
      </div>
    </div>
  );
};

export default Accueil;
