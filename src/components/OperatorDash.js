import React, { useState, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { axiosWithAuth } from "../utils/axiosWithAuth";

function OperatorDashboard(props) {
  const [operator, setOperator] = useState();

  const { id } = useParams();
  const { history } = useHistory();

  useEffect(() => {
    axiosWithAuth()
      .get(`https://truck-server.herokuapp.com/operator/${id}`)
      .then((res) => {
        setOperator(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const deleteTruck = (truckID) => {
    axiosWithAuth()
      .delete(`https://truck-server.herokuapp.com/trucks/${truckID}`)
      .then((res) => {
        const newTrucks = operator.trucks.filter(
          (t) => t.truck_id !== res.data.truck.truck_id
        );
        console.log(newTrucks);
        setOperator({ ...operator, trucks: newTrucks });
      })
      .catch((err) => console.log(err));
  };

  if (!operator) {
    return <div>Loading Truck Info....</div>;
  }

  return (
    <OperatorStyle>
      <div className="operatorHeader">
        <h1>Operator Dashboard</h1>
        <div>
          <Link to={`/newtruck`} className="button icon solid">
            Add new truck
          </Link>
        </div>
      </div>

      <div className="truckContainer">
        {operator.trucks.map((item) => {
          return (
            <div className="truckCard">
              <h3 className="truckName info">{item.name}</h3>
              <p className="info">Type: {item.cuisine_type}</p>
              <p className="info">Truck ID: {item.truck_id}</p>
              <p className="info">Average Rating: {item.customer_rating_avg}</p>
              <p className="info lastItem">Location: {item.current_location}</p>
              <Link
                to={`/edittruck/${item.truck_id}`}
                className="button icon solid"
              >
                Edit
              </Link>
              <Link
                to={`/trucks/${item.truck_id}/newmenu`}
                className="button icon solid"
              >
                Menu
              </Link>
              <button
                onClick={() => {
                  deleteTruck(item.truck_id);
                }}
                className="button solid danger"
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </OperatorStyle>
  );
}

export default OperatorDashboard;

const OperatorStyle = styled.div`
  .operatorHeader {
    background-color: #e3e3e3;
    border-bottom: 1px solid #cacaca;
    height: 12rem;
  }

  h1 {
    color: teal;
    font-size: 2rem;
    padding-top: 3rem;
    margin-left: 2rem;
    margin-bottom: 2rem;
  }

  button {
    margin-left: 2rem;
  }

  .truckCard {
    border-radius: 8px;
    width: 60%;
    background-color: #f3f3f3;
    border: 1px solid #979797;
    margin: auto;
    margin-top: 3rem;
  }

  .info {
    padding-left: 1.5rem;
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  }

  .truckName {
    padding-top: 1.5rem;
    font-size: 1.5rem;
    margin-bottom: 0.75rem;
  }

  .lastItem {
    margin-bottom: 1.5rem;
  }
`;
