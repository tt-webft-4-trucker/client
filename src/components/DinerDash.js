import React, { useState, useEffect, useContext } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { UserContext } from "../utils/UserContext";

export default function DinerDash() {
  const [diner, setDiner] = useState();
  const { user } = useContext(UserContext);

  useEffect(() => {
    console.log(user);
    axiosWithAuth()
      .get(
        `https://truck-server.herokuapp.com/profile/${user.profile_id}/diner`
      )
      .then((res) => {
        setDiner(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user]);

  if (!diner) {
    return <div>Loading...Please Wait</div>;
  }

  return (
    <div id="main-wrapper">
      <div className="container">
        <div className="row gtr-200">
          <div className="col-8 col-12-large imp-medium">
            <div id="content">
              <section className="last">
                <div>
                  <h2>Username:{diner.name}</h2>
                  <div>MAP COMPONENT GOES HERE</div>
                  <div>BUILD TRUCK FAVORITES</div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
