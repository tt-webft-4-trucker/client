import React, { useState, useEffect} from 'react';

import MapComp from '../components/MapComp';


export default function Map( props ){

    const center = {
        lat1: 0,
        lng1: 0
    }
    
   
   
  return (
      
    <div>
        <MapComp loc={ center }/>
    </div>
  ) 
}