import { LocationProperties } from "../../../model/interfaces";
import * as type from "../../actionType";
import { LocationActions } from "../../type/location";

export const getLocaion = (): LocationActions => {
  return {
    type: type.GET_ALL_LOCATION,
  };
};
export const AddLocation = (data: LocationProperties): LocationActions => {
  return {
    type: type.ADD_NEW_LOCATION,
    payload: data,
  };
};
export const EdditLocation = (data: LocationProperties): LocationActions => {
  return {
    type: type.EDDIT_LOCATION,
    payload: data,
  };
};
