import React from "react";
import "./TextInput.scss";

type Props = {
  placeholder?: string;
  onChange: (val: string | null) => void;
  value: string | null;
  width?: string;
};

export default function TextInput(props: Props) {
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange(e.target.value);
    e.preventDefault();
  };

  return (
    <input
      style={{ width: props.width ?? "auto" }}
      value={props.value ?? ""}
      onChange={onChangeInput}
      className="text-input-style"
      type="text"
      placeholder={props.placeholder ?? ""}
    />
  );
}
