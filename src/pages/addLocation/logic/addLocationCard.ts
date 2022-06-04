import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LocationProperties } from "../../../model/interfaces";
import { RootState } from "../../../store/reducer";
import {AddLocation} from '../../../store/action/location'
import { LatLngTuple } from "leaflet";
const Logic = () => {
  const allLocation = useSelector(
    (state: RootState) => state.location
  );
  const dispatch = useDispatch();

  const [newLocation, setNewLocation] = useState<LocationProperties>();



  const handleOnChangeTextBox=(e: React.ChangeEvent<HTMLInputElement>)=>{
    setNewLocation({...newLocation!,[e.target.name]:e.target.value})
  }
 const handleOnChangeSelectBox=(e: React.ChangeEvent<HTMLSelectElement>)=>{  
   
  setNewLocation({...newLocation!,[e.target.name]:e.target.value})
}
const handleUploadPictur=(e: React.ChangeEvent<HTMLInputElement>)=>{
  e.preventDefault();
  if (e.target.files && e.target.files[0]) {

  const file = e.target.files[0];
  getBase64(file).then((base64:any )=> {
    setNewLocation({...newLocation!,logo:base64})
    // localStorage["fileBase64"] = base64;
    // console.debug("file stored",base64);
  });
  }

 
}
const getPositionCallBack=(position:LatLngTuple)=>{
  setNewLocation({...newLocation,position})
}


const getBase64 = (file:File) => {
  return new Promise((resolve,reject) => {
     const reader = new FileReader();
     reader.onload = () => resolve(reader.result);
     reader.onerror = error => reject(error);
     reader.readAsDataURL(file);
  });
}


  const handleSubmit=(e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    dispatch(AddLocation(newLocation!))
  }
  
  return {  handleOnChangeSelectBox,
    handleOnChangeTextBox,
    handleSubmit,
    handleUploadPictur,
    allLocation,
    getPositionCallBack};
};
export default Logic;
