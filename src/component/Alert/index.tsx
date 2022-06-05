import { FC } from "react";
import { statusMessage } from "../../model/constants";
import "./style.css";
interface AlertProps {
  variant: "success" | "warning";
}

const Alert: FC<AlertProps> = ({ variant }) => {
  return (
    <>
      <div className={`alert alert-${variant}`}>
        <strong>{statusMessage[variant!]}</strong>
      </div>
    </>
  );
};

export default Alert;
