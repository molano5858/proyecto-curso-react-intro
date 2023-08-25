import React from "react";
import "./TodosLoading.css";

function TodosLoading() {
  return (
    <>
      {/* <div className="holaBebe">
        <p>Estamos cargando--------</p>
      </div> */}

      <div className="LoadingTodo-container">
        <span className="LoadingTodo-completeIcon"></span>
        <p className="LoadingTodo-text"></p>
        <span className="LoadingTodo-deleteIcon"></span>
      </div>

      
    </>
  );
}

export { TodosLoading };
