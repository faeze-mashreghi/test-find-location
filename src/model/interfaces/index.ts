import { LatLngTuple } from "leaflet";

export interface SelectOption{
    value:number;
    label:string
}

export interface LocationProperties{
    id?:string
    type?:number
    name?:string
    logo?:string
    position?:LatLngTuple
}