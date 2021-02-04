import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { axiosWithAuth } from "./utils/axiosWithAuth";

function FoodTruckView(props) {
    const [ truck, setTruck ] = useState();
    
    const { id } = useParams();

      useEffect(() => {
        // console.log("id is : ")
        console.log(id);
        axiosWithAuth()
            .get(`https://truck-server.herokuapp.com/trucks/${id}`)
            .then((res) => {
                // console.log(res.data)
                setTruck(res.data)
            })
            .catch((err) => {
                console.log(err);
            })

    }, [id]);


  if (!truck) {
    return <div>Loading truck information...</div>;
  }

    return (
    <div className="FoodTruckView">
        <TruckName>{truck.name}</TruckName>

            <MenuContainer>

                {
                    truck.menu.map(item => {
                        return (
                                <MenuItemStyle>
                                    <h3 className='itemName'>{item.item_name}</h3>
                                    <p className='itemDescription info'>{item.item_description}</p>
                                    <p className='itemPrice info'>Price: {item.item_price}</p>
                                    {/* <p className='customerRatings'>{item.customerRatings}</p> */}
                                    <p className='avgCustomerRatings info'>Average Rating: {truck.customer_rating_avg}</p>
                                    <div className='foodImage'>
                                        <img src={item.item_photos} />
                                    </div>
                                </MenuItemStyle>
                        )
                    })
                }
        
            </MenuContainer>

    </div>
  );
}

export default FoodTruckView;



const TruckName = styled.h1`
    display: flex;
    margin-left: 3rem;
    color: teal;
`

const MenuContainer = styled.div`
    background-color: #F2F2F2;
    opacity: 80%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;

`

const MenuItemStyle = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #F9F9F9;
    border: 1px solid #979797;
    /* width: 26rem; */
    width: 14rem;
    margin: 2rem;
    border-radius: .5rem;
    padding: 1rem;
    color: #3C3C3C;

    .itemName {
        display: flex;
        text-align: left;
        color: #3C3C3C;
        margin-top: 2px;
    }

    .itemDescription {
        display: flex;
        text-align: left;
        margin-top: -4px;
    }

    .info {
        display: flex;
        margin-top: 6px;
    }


    .foodImage {
        display: flex;
        justify-content: flex-start;
        margin-top: 6px;
    }

    img {
        display: flex; 
        width: 10rem;
        align-items: center;
        border-radius: 8px;
    }
`

