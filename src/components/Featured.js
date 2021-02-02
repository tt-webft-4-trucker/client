import axios from 'axios';
import React, { useState, useEffect } from 'react';


/**
 * CUSTOM IMPORTS 
 */

import FeaturedCard from './FeaturedCard';


export default function Featured( props ){

  const [ trucks, setTrucks ] = useState( [] );

  const fetchTrucks = () => {
    axios.get( `https://truck-server.herokuapp.com/trucks` )
      .then( res => setTrucks( res.data ) )
      .catch( err => console.log( err ) );
  }

  useEffect( () => {
    fetchTrucks();
  }, [])
  return(
    <div id="features-wrapper">
    <div class="container">
        <div class="row">
          {
            trucks.map( info => {
              return(
                <FeaturedCard details={ info } />
              );
            })
          }
        </div>
    </div>
</div>
  );
}