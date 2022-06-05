import React, { FC } from "react";
import "./style.css";
interface UploadBoxProps {
  className?: string;
  label?: string;
  name?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const UploadBox: FC<UploadBoxProps> = ({
  className,
  label,
  name,
  onChange,
}) => {
  return (
    <div className="main-div-upload-box">
      <label className=" label-upload-box dark">{label}</label>
      <div className={`upload-box ${className}`}>
        <label htmlFor="file-input">
          <div className=" upload-box-header bg-darkblue white">upload</div>
          <div className=" upload-box-body bg-ligthblue">
            <span className="icon-folder-upload  darkblue"></span>
          </div>
          <input
            id="file-input"
            className="input-box"
            type="file"
            name={name}
            onChange={onChange}
          />
        </label>
      </div>
    </div>
  );
};

export default UploadBox;
