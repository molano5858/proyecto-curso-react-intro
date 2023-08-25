import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";
{
  /*para portals debemos primero decirle que elemento queremos teletransportar con ReactDOM.createPortal */
}
{
  /*luego le decimos donde hacerlo, en que nodo del HTML lo vamos a poner*/
}

function Modal({ children }) {
  return ReactDOM.createPortal(
    <div className="BackgroundModal">{children}</div>,
    document.getElementById("ModalContainer")
  );
}

export { Modal };
