import { LocationProperties } from "../../../model/interfaces";
import * as type from "../../actionType";

export interface GetAllLocation {
  type: typeof type.GET_ALL_LOCATION;
  payload?: LocationProperties[];
}

export interface AddLocation {
  type: typeof type.ADD_NEW_LOCATION;
  payload?: LocationProperties;
}

export interface EdditLocation {
  type: typeof type.EDDIT_LOCATION;
  payload?: LocationProperties;
}

export type LocationActions = GetAllLocation | AddLocation | EdditLocation;
