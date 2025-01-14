import React from "react";

export interface IItemProps {
  label: string;
  value: any;
}

export interface ISelectProps {
  items: Array<IItemProps>;
  onChange: (item: any) => void;
  className?: string;
}

const update = (
  items: Array<IItemProps>,
  onChange: (item: any) => void,
  e: React.ChangeEvent<HTMLSelectElement>,
) => {
  onChange(items.find((item) => item.value.toString() === e.target.value));
};

const Select = ({ items, onChange, className }: ISelectProps) => (
  <select
    data-testid="select"
    onChange={(e) => update(items, onChange, e)}
    className={className}
  >
    {items.map(({ label, value }, index) => (
      <option
        data-testid={"option-" + index}
        key={[label, index].join("")}
        value={value.toString()}
      >
        {label}
      </option>
    ))}
  </select>
);

export default Select;
