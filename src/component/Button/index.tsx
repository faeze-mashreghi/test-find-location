import React, { FC } from 'react';
import './style.css'
interface ButtonProps {
  lable?:string
  onclick?:React.MouseEventHandler<HTMLButtonElement>
  className?:string
  variant?:'secondary'|'info'|'warning'
  type?:"button" | "submit" | "reset" 
}

const Button: FC<ButtonProps> = ({ lable,onclick,className,variant,type}) => {
  return (
    <>
      <button onClick={onclick} type={type}
        className={`btn btn-default btn-${variant}  ${className}`}>
          {lable}
       </button>
    </>
  );
};

export default Button;