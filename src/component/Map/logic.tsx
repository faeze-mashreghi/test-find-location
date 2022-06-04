import { useEffect, useState } from "react";
import { Marker, useMapEvents } from "react-leaflet";
import {LatLngTuple} from 'leaflet'
import Popup from "../Popup";
import { useSelector } from "react-redux";
import { RootState } from "../../store/reducer";
import { LocationProperties } from "../../model/interfaces";

const Logic = (selectedLocation?:(position:LatLngTuple)=>void ) => {
  const [selectedPositions, setSelectedPositions] = useState<LocationProperties[]>([{position:[0,0]}]);
  const [fullScrren,setFullScreen]=useState(false)

  const allLocation = useSelector(
    (state: RootState) => state.location
  );

useEffect(()=>{
  setSelectedPositions(allLocation)
},[allLocation?.length])
const handleFullScreen=()=>{
    setFullScreen(!fullScrren)
}

console.log('allLocation',allLocation)
const Markers = () => {

  const map = useMapEvents({
      dblclick(e) {     
                                   
          setSelectedPositions([
            ...allLocation,
           { position:[  e.latlng.lat,
              e.latlng.lng]
            }
          ]); 
         
          setFullScreen(false)     
          selectedLocation!( 
            [e.latlng.lat,
            e.latlng.lng])        
                    
      },            
  })
  
  return (
    <>
    {  selectedPositions?.length>0 ?selectedPositions.map((item)=>
        <Marker           
        key={item?.position![0]}
        position={item.position!}
        >
           <Popup title={item?.name} locType={3}/>
        </Marker>
      )
        
      : null}
      </>
  )   
  
}

  return {  
    handleFullScreen,
    fullScrren,
    Markers
 }}
export default Logic;
