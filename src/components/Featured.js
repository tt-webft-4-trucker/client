import { axiosWithAuth } from "../utils/axiosWithAuth";
import React, { useState, useEffect } from "react";

/**
 * CUSTOM IMPORTS
 */

import FeaturedCard from "./FeaturedCard";

export default function Featured(props) {
  const [trucks, setTrucks] = useState([]);

  const fetchTrucks = () => {
    axiosWithAuth()
      .get(`https://truck-server.herokuapp.com/trucks`)
      .then((res) => setTrucks(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchTrucks();
  }, []);
  return (
    <div id="features-wrapper">
      <div className="container">
        <div className="row">
          {trucks.map((info) => {
            return <FeaturedCard details={info} key={info.truck_id} />;
          })}
        </div>
      </div>
    </div>
  );
}
