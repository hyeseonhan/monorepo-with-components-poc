import React from "react";
import "../../tailwind.css";

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return (
    <button className="bg-gray-400 text-white rounded-md p-4">
      {props.label}
    </button>
  );
};

export default Button;
