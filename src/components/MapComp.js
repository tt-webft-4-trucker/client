import React, { useEffect, useState, useContext } from 'react'
import L from 'leaflet';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { axiosWithAuth } from "../utils/axiosWithAuth";

import { UserContext } from "../utils/UserContext";

import '../map.css';
import "leaflet/dist/leaflet.css";
import 'leaflet/dist/leaflet.js';

import markerIcon from '../images/marker.png';
import userIcon from '../images/user.png';

const marker = L.icon({
    iconUrl: markerIcon,
    iconSize:    [32, 41],
	iconAnchor:  [12, 41],
})
const userMarker = L.icon({
    iconUrl: userIcon,
    iconSize:    [32, 41],
	iconAnchor:  [12, 41],
})

export default function MapComp( props ){

    const { user } = useContext(UserContext);
    const userLocation = JSON.parse(user.current_location)

    const [ trucks, setTrucks ] = useState([]);
    useEffect(()=>{
        axiosWithAuth()
        .get( `https://truck-server.herokuapp.com/trucks` )
        .then( res => {
            setTrucks( res.data )   
         } )
        .catch( err => console.log( err ) );
    },[])
return(
    <div className="leaflet-container">
        <MapContainer center={[userLocation["lat"],  userLocation["long"]]} zoom={13} scrollWheelZoom={true} minZoom={3}>
        <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
         />
        <Marker position={[userLocation["lat"],  userLocation["long"]]} icon={ userMarker }>
        </Marker>
        
        {
            trucks.map( truck => {
                const parsed = JSON.parse(truck.current_location);
                let location = [];
                
                if(parsed){
                    return (
                    <Marker position={[Number(parsed["lat"]),Number(parsed["long"])]} icon={ marker }>
                        <Popup>
                            <h4>{ truck.name }</h4>
                            <h5>--{ truck.cuisine_type }--</h5>
                            <h6>Rating: { truck.customer_rating_avg }</h6>
                        </Popup>
                    </Marker>
                    )
                }else{
                    location.push(0)
                    location.push(0)
                }
            })
            
        }
        </MapContainer>
    </div>
) 
}
