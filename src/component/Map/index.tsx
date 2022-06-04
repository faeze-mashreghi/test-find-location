



import { LatLngTuple } from 'leaflet';
import { FC } from 'react';
import { MapContainer, Marker, TileLayer, useMapEvents } from 'react-leaflet';
// import Popup from '../Popup';
import Logic from './logic'
import './style.css'


interface MapProps{
  selectedLocation?:(position:LatLngTuple)=>void 
}
const Map:FC<MapProps>=({selectedLocation})=> {
  const {handleFullScreen,fullScrren,Markers}=Logic(selectedLocation)



    
  return (
    <div className={`${fullScrren?'maximize':'minimize'}`}>
    <MapContainer
    center={{ lat: 51.505, lng: -0.09 }}
    zoom={13}
    scrollWheelZoom={true}
    doubleClickZoom={false}
    
    >
          <button  className='fullscreen-button' type='button' onClick={handleFullScreen}>
            <span className={fullScrren?"icon-shrink":"icon-enlarge"}></span>
            </button>

       <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

      <Markers/>


    </MapContainer>
    
    </div>
  );
}

export default Map