import React from "react";
import { BsBrightnessLowFill } from "react-icons/bs"; // completado
import { BsFillXSquareFill } from "react-icons/bs"; // delete
import { BsBrightnessLow } from "react-icons/bs"; // no completado
import "./TodoIcon.css";

const iconTypes = {
  check: (color) => <BsBrightnessLowFill className="Icon-svg " fill={color} />,
  delete: (color) => (
    <BsFillXSquareFill className="Icon-svg Icon-svg-delete" fill={color} />
  ),
  unchecked: (color) => <BsBrightnessLow className="Icon-svg" fill={color} />,
};

function TodoIcon({ type, color }) {
  return <span className={`Icon  Icon-${type}`}>{iconTypes[type](color)}</span>;
}

export { TodoIcon };
