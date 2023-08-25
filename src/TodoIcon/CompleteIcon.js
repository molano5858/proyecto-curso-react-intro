import React from "react";
import { BsBrightnessLowFill } from "react-icons/bs"; // completado
import { TodoIcon } from "./TodoIcon";

// function CompleteIcon() {
//   return <BsBrightnessLowFill />;
// }

function CompleteIcon({ type, completed }) {
  return <TodoIcon type={type} color={completed ? "green" : "grey"} />;
}
export { CompleteIcon };
