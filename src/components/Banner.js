import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../utils/UserContext";

export default function Banner(props) {
  const { user } = useContext(UserContext);



  return (
    <div id="banner-wrapper">
      <div id="banner" className="box container">
        <div className="row">
          <div className="col-7 col-12-medium">
            <h2>
              Every true "foodie" worth their salt knows that some of the best
              food in any city can be found on food trucks
            </h2>
            <p>Find the best food trucks near you!</p>
          </div>
          <div className="col-5 col-12-medium">
            <ul>
              <li>
                {
                  user.operator_id === null ?
                      
                  <Link to={`/dinerdash`} className="button large icon solid fa-arrow-circle-right">
                    Dashboard
                  </Link> 
                  :
                  <Link to={`/operator/${user.operator_id}`} className="button large icon solid fa-arrow-circle-right">
                    Dashboard
                  </Link>  
                }
              
              </li>
              <li>
              <Link to="./">
                <button className="button large icon solid fa-arrow-circle-right">
                  More Info
                </button>
                </Link> 
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
