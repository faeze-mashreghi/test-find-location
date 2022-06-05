import { FC } from "react";
import "./style.css";
interface CardProps {
  children: JSX.Element[] | JSX.Element;
  title: string;
}

const Card: FC<CardProps> = ({ title, children }) => {
  return (
    <>
      <div className="card white">
        <div className="card-header">{title}</div>
        <div className="card-body">{children}</div>
      </div>
    </>
  );
};

export default Card;
