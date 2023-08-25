import React from "react";
import "./TodoForm.css";
import { TodoContext } from "../TodoContext/TodoContext";

function TodoForm() {
  // vamos a consumir nuestro contexto para traer el setOpenModal para cerrar el modal cuando cancelemos o añadimos un todo
  // desde el modal
  const { addTodo, setOpenModal } = React.useContext(TodoContext);

  // vamos a crear un nuevo estado LOCAL es decir solo aqui, sin usarlo en el context, para que lea lo que los usuarios estan
  // escribiendo en el textArea

  const [newTodoValue, setNewTodoValue] = React.useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    // con este evento onSubmit y el preventDefault() lo que estamos haciendo es quitandole al los botnes del formulario
    // ese "evento por defecto" que tienen ya que si no lo hacemos lo que pasa es que la pagina se recarga cuando le
    // damos click a los botones

    if (newTodoValue.trim() !== "") {
      addTodo(newTodoValue);
    } else {
      console.log("parce escriba algo");
    }

    setOpenModal(false);
    // con el false lo que estamos haciendo es que al darle click me ponga este estado en false para que se cierre
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo TODO</label>
      <textarea
        placeholder="Estudiar el curso de React JS"
        value={newTodoValue}
        onChange={onChange}
      ></textarea>
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button-cancel"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button type="submit" className="TodoForm-button TodoForm-button-add">
          Añadir
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
