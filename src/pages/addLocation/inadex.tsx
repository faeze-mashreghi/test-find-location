import { FC } from "react";
import Button from "../../component/Button";
import Card from "../../component/Card";
import SelectBox from "../../component/SelectBox";
import TextBox from "../../component/TextBox";
import UploadBox from "../../component/UploadBox";
import Alert from "../../component/Alert";
import { locationType } from "../../model/constants";
import Logic from "./logic";
import Map from "./component/Map";
import "./style.css";
const LocationCard: FC = ({}) => {
  const {
    handleOnChangeTextBox,
    handleOnChangeSelectBox,
    handleSubmit,
    handleUploadPictur,
    getPositionCallBack,
    success,
    newLocation,
  } = Logic();

  return (
    <form onSubmit={handleSubmit} className="add-location-form">
      <div className="add-location-box">
        {success && <Alert variant="success" />}
        <Card title="Share Location">
          <TextBox
            onChange={handleOnChangeTextBox}
            label="Location name:"
            className="mt-3"
            name="name"
            value={newLocation?.name}
            required
          />

          <div className="map-box mt-3">
            <label className="dark">Location on map:</label>
            <div>
              <Map selectedLocation={getPositionCallBack} />
              <input
                className="hidden-input white"
                value={
                  newLocation?.position ? newLocation?.position![0] : undefined
                }
                required
              />
            </div>
          </div>
          <SelectBox
            options={locationType}
            onChange={handleOnChangeSelectBox}
            label="Location Type:"
            className="mt-3 select-location-type"
            name="type"
            selected={locationType?.find((i) => i.value === newLocation?.type)}
            required
          />
          <UploadBox
            className="mt-3"
            label="logo:"
            onChange={handleUploadPictur}
          />
        </Card>

        <Button
          lable="Save"
          variant="info"
          className="me-3 mt-3"
          type="submit"
        />
        <Button lable="Cancle" className="mt-3 ms-2" />
      </div>
    </form>
  );
};

export default LocationCard;
