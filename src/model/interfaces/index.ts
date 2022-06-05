import { LatLngTuple } from "leaflet";

export interface SelectOption {
  value: string;
  label: string;
}

export interface LocationProperties {
  id?: string;
  type?: string;
  name?: string;
  logo?: string;
  position?: LatLngTuple;
}
