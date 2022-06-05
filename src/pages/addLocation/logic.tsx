import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LocationProperties } from "../../model/interfaces";
import { RootState } from "../../store/reducer";
import { AddLocation, EdditLocation } from "../../store/action/location";
const Logic = () => {
  const allLocation = useSelector((state: RootState) => state.location);
  const dispatch = useDispatch();

  const [newLocation, setNewLocation] = useState<LocationProperties>();
  const [success, setSuccess] = useState<boolean>();

  const handleOnChangeTextBox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewLocation({ ...newLocation!, [e.target.name]: e.target.value });
  };
  const handleOnChangeSelectBox = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setNewLocation({ ...newLocation!, [e.target.name]: e.target.value });
  };
  const handleUploadPictur = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      getBase64(file).then((base64: any) => {
        setNewLocation({ ...newLocation!, logo: base64 });
      });
    }
  };
  const getPositionCallBack = (currentLocation: LocationProperties) => {
    if (currentLocation?.id) {
      setNewLocation(currentLocation);
    } else {
      setNewLocation({ ...newLocation, position: currentLocation?.position });
    }
  };

  const getBase64 = (file: File) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newLocation?.id) {
      dispatch(EdditLocation(newLocation!));
    } else {
      dispatch(AddLocation(newLocation!));
    }
    setNewLocation({});

    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
    }, 5000);
  };

  return {
    handleOnChangeSelectBox,
    handleOnChangeTextBox,
    handleSubmit,
    handleUploadPictur,
    allLocation,
    getPositionCallBack,
    success,
    newLocation,
  };
};
export default Logic;
