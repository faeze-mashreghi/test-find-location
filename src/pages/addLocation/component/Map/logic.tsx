import { useEffect, useState } from "react";
import { Marker, useMapEvents } from "react-leaflet";
import Popup from "../Popup";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/reducer";
import { LocationProperties } from "../../../../model/interfaces";

const Logic = (selectedLocation?: (position: LocationProperties) => void) => {
  const [fullScrren, setFullScreen] = useState(false);
  const [selectedPositions, setSelectedPositions] = useState<
    LocationProperties[]
  >([{ position: [0, 0] }]);

  const allLocation = useSelector((state: RootState) => state.location);

  useEffect(() => {
    setSelectedPositions(allLocation);
  }, [allLocation?.length]);

  const handleFullScreen = () => {
    setFullScreen(!fullScrren);
  };
  const Markers = () => {
    useMapEvents({
      dblclick(e) {
        setSelectedPositions([
          ...allLocation,
          { position: [e.latlng.lat, e.latlng.lng] },
        ]);

        setFullScreen(false);
        selectedLocation!({
          position: [e.latlng.lat, e.latlng.lng],
        });
      },
    });

    return (
      <>
        {selectedPositions?.length > 0
          ? selectedPositions.map((item) => (
              <Marker key={item?.id} position={item.position!}>
                <Popup
                  currentLocation={item}
                  onEdditClick={(current) => {
                    selectedLocation!(current);
                    setFullScreen(false);
                  }}
                />
              </Marker>
            ))
          : null}
      </>
    );
  };

  return {
    handleFullScreen,
    fullScrren,
    Markers,
  };
};
export default Logic;
