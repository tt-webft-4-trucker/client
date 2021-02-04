import React, { useState, useEffect} from 'react';

import MapComp from '../components/MapComp';


export default function Map( props ){

    const center = {
        lat1: 0,
        lng1: 0
    }
    
   
    
    // const getLocation = () =>{
    //     navigator.geolocation.getCurrentPosition(function(position) {
    //         setUserLoc({
    //             lat1: position.coords.latitude,
    //             lng1: position.coords.longitude
    //         })
    //       });
    // }
    // const getLocation = () =>{
    //     navigator.geolocation.watchPosition(function(position) {
    //         return{
    //             lat1: position.coords.latitude,
    //             lng1: position.coords.longitude
    //         }
    //       });
    // }
    // useEffect(()=>{
    //     getLocation();
    // }, [])
    // const [ userLoc, setUserLoc ] = useState( getLocation() );
  return (
      
    <div>
        <MapComp loc={ center }/>
    </div>
  ) 
}