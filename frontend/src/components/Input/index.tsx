import { ChangeEvent } from "react";

interface IInput {
  value: string;
  label: string;
  setValue: (value: string) => void;
  name: string;
  type?: string;
}

export const Input = ({ value, label, setValue, name, type }: IInput) => {
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div className="flex w-full items-center gap-2">
      <label className="w-24" htmlFor={name}>
        {label}
      </label>
      <input
        className="text-cashmere-900 flex-1 rounded-sm px-3 py-1.5"
        value={value}
        onChange={onChange}
        id={name}
        type={type}
      />
    </div>
  );
};
