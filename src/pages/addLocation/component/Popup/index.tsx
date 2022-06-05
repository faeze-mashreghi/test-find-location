import { FC } from "react";
import { Popup as PopupLeaflet } from "react-leaflet";
import Button from "../../../../component/Button";
import "./style.css";
import { locationType } from "../../../../model/constants";
import { LocationProperties } from "../../../../model/interfaces";

interface PopUpProps {
  currentLocation?: LocationProperties;
  onEdditClick: (selected: LocationProperties) => void;
}

const Popup: FC<PopUpProps> = ({ currentLocation, onEdditClick }) => {
  return (
    <>
      <PopupLeaflet>
        <div className="popup-header">
          <span>{currentLocation?.name}</span>
        </div>
        <div className="popup-body">
          <img
            src={currentLocation?.logo}
            alt={currentLocation?.name}
            width="100"
            height="60"
          />
          <div>
            {" "}
            <span>type:</span>{" "}
            <span>
              {
                locationType?.find((i) => i.value === currentLocation?.type)
                  ?.label
              }
            </span>{" "}
          </div>
          <div className="eddit-button">
            <Button
              lable="Eddit "
              variant="warning"
              className="mt-2"
              onclick={() => onEdditClick(currentLocation!)}
            />
          </div>
        </div>
      </PopupLeaflet>
    </>
  );
};

export default Popup;
