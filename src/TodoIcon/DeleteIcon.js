import React from "react";
import { BsFillXSquareFill } from "react-icons/bs"; // delete
import { TodoIcon } from "./TodoIcon";

// function DeleteIcon() {
//   return <BsFillXSquareFill />;
// }

function DeleteIcon() {
  return <TodoIcon type="delete" color="grey" />;
}

export { DeleteIcon };
