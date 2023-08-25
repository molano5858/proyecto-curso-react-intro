import React from "react";
// vamos a importar el TodoContext pero aqui lo vamos a consumir de una manera distinta usando React.useContext
import { TodoContext } from "../TodoContext/TodoContext";

// vamos a tener las props que van a tener dos propiedades, las props son un objeto asi que podemos escribirlo asi
// {total, completed} se refiere a las tareas completadas y a las tareas totales

// dar estilos con archivo css lo importamos y ya
import "./TodoCounter.css";

// ejemplo de dar estilos en linea, se tiene que pasar como un objeto y las propiedades deben estar escritar en
// camelCase
const estilosEnLinea = {
  backgroundColor: "LightGreen",
  color: "white",
  padding: "10px",
  margin: "0px",
  textAlign: "center",
  fontSize: "12px",
};

function TodoCounter() {
  // aqui en TodoCounter ya no vamos a recibir {total, completed} como argumentos si no que vamos a usarlas desde el
  // contexto global, y alla se llaman completedTodos, totalTodos pero RECUERDA que aqui en TodoCounter.js estas dos
  // variables se llaman total y completed asi que puedo cambiarles el nombre
  const { completedTodos: completed, totalTodos: total } =
    React.useContext(TodoContext);
  if (total === completed) {
    return (
      // ejemplo de dar estilos en linea y con archivo css
      <div>
        <h1 className="TodoCounter">
          FELICITACIONES COMPLETASTE TODAS TUS TAREAS
        </h1>
        <p style={estilosEnLinea}>Ejemplo estilos en linea</p>
      </div>
    );
  } else {
    return (
      // ejemplo de dar estilos en linea y con archivo css
      <div>
        <h1 className="TodoCounter">
          Has completado <span>{completed}</span> de <span>{total}</span> To
          Do´s
        </h1>
        <p style={estilosEnLinea}>Ejemplo estilos en linea</p>
      </div>
    );
  }
}

export default TodoCounter;
