import React, { FC } from "react";
import "./style.css";
interface TextBoxProps {
  value?: string | number | readonly string[];
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  label?: string;
  className?: string;
  name?: string;
  required?: boolean;
}

const TextBox: FC<TextBoxProps> = ({
  value,
  onChange,
  label,
  className,
  name,
  required,
}) => {
  return (
    <div className={`div-text-box ${className}`}>
      <label>{label}</label>
      <input
        className="text-box"
        onChange={onChange}
        value={value}
        name={name}
        required={required}
      />
    </div>
  );
};

export default TextBox;
