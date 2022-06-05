import React, { FC } from "react";
import { SelectOption } from "../../model/interfaces";
import "./style.css";
interface SelectBoxProps {
  options: SelectOption[];
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  selected?: SelectOption;
  label?: string;
  className?: string;
  name?: string;
  required?: boolean;
}

const SelectBox: FC<SelectBoxProps> = ({
  options,
  onChange,
  selected,
  label,
  className,
  name,
  required,
}) => {
  return (
    <div className={`main-div-select ${className}`}>
      <label className="dark">{label}</label>
      <div className="select-box">
        <label>
          <select
            onChange={onChange}
            value={selected?.value}
            name={name}
            required={required}
          >
            <option value="">select</option>
            {options.map((i) => (
              <option value={i?.value} key={i?.value}>
                {" "}
                {i.label}{" "}
              </option>
            ))}
          </select>
        </label>
      </div>
    </div>
  );
};

export default SelectBox;
