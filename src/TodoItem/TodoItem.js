import React from "react";
import "./TodoItem.css";

// importar componentes para el icono de completado o no completado
import { CompleteIcon } from "../TodoIcon/CompleteIcon.js";
import { DeleteIcon } from "../TodoIcon/DeleteIcon.js";
import { NotCompleteIcon } from "../TodoIcon/NotCompleteIcon";

// para especificar codigo JS debemos abrir llaves {}
// para especificar clases dinamicas, en este caso cuando TodoItem tenca la clase active van a cambiar clases
// entonces debemos pasar las clases no con comillas "" si no con comillas invertidas ``
// vamos a preguntar si nuestro TodoItem tiene la propiedad completed: true con operador ternario
// ${props.completed && `Icon-check--active`} cuando escribimos esto estamos diciendo que si y solo si recibo
// props.completed true entonces agregue la clase Icon-check--active
// yo hice el ejercicio de escribir ${props.completed ? `Icon-check--active` : `Icon-check--inactive`}
// para en caso que sea false tenga otro color

// CREACION DAR CLICK AL TODO PARA QUE ESTE COMPLETADO
// creamos un evento onClick en el span (este es temporal luego va a ser un icono), cuando demos click tenemos que actualizar
// el actualizador de estados del setTodos en app.js porque al darle click cambiaremos el estado de la tarea de no completada a completada

// INICIO CREACION DE TIPOS DE CLASES QUE PUEDEN TENER UN ICONO
// const iconTypes = {
//   completed: <CompleteIcon />,
//   delete: <DeleteIcon />,
//   notcompleted: <NotCompleteIcon />,
// };
// FIN CREACION DE TIPOS DE CLASES QUE PUEDEN TENER UN ICONO

function TodoITem(props) {
  return (
    <li className="TodoItem">
      <span
        //onClick={props.eventoCreadoPorProfesor}
        onClick={props.eventoCreadoPorMi}
        className={`Icon Icon-check ${props.completed && `Icon-check--active`}`}
      >
        {/* {props.completed ? <CompleteIcon /> : <NotCompleteIcon />} */}
        {props.completed ? (
          <CompleteIcon
            type="check"
            completed={props.completed}
            onComplete={props.onComplete}
          />
        ) : (
          <CompleteIcon
            type="unchecked"
            completed={props.completed}
            onComplete={props.onComplete}
          />
        )}
      </span>

      <p className={`TodoItem-p ${props.completed && `TodoItem-p--complete`} `}>
        {props.text}
      </p>

      <span onClick={props.onDelete} className="Icon Icon-delete">
        <DeleteIcon />
      </span>
    </li>
  );
}

export { TodoITem };
