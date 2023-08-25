import React from "react";

import { useLocalStorage } from "./useLocalStorage"; // CUSTOM HOOK QUE CREAMOS

// React.Context es la forma de evitar el props drilling, que es pasarle propiedades de un compoente a otro
// para pararse esas propiedades a otro y asi sucesivamnte,
// lo que se hace es crear un contexto global para que esas propiedades sean consumidas desde cada componente de ese
// estado global sin tener que pasar y pasar propiedades de componente a componente

const TodoContext = React.createContext();

// {
//   /* <TodoContext.Provider></TodoContext.Provider>
// <TodoContext.Consumer></TodoContext.Consumer>
// Estas es la forma de de utilizar el contexto creado en la linea de codigo React.createContext()
// AUNQUE TAMBIEN SE PUEDE HACER UN CONSUMER Y UN PROVIDER PERSONALIZADO QUE ES LO QUE HAREMOS ACONTINUACION
// */
// }

// {
//   /*Creacion de provider y consumer personalizado
//   tiene ciertas ventajas como poder encapsular la logica de la app en el provider o en el consumer
//   */
// }

function TodoProvider({ children }) {
  // Aqui traemos toda la logica que estaba en App.js
  //const [todos, setTodos] = React.useState(parsedTodos); dejamos de usar este estado para usar nuestro CUSTOM HOOK
  const [{ item: todos, saveItem: saveTodos, loading, error }] =
    useLocalStorage("todoList_v1", []);

  const [searchValue, setSearchValue] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);

  const completedTodos = todos.filter((item) => {
    return item.completed;
  }).length;

  const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo) => {
    return todo.text.toLowerCase().includes(searchValue.toLowerCase());
  });

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({ text, completed: false });
    saveTodos(newTodos);
  };

  const miPropioCompletarTodo = (index) => {
    const listaTodosActualizadaMia = [...todos];
    if (listaTodosActualizadaMia[index].completed === true) {
      listaTodosActualizadaMia[index].completed = false;
    } else if (listaTodosActualizadaMia[index].completed === false) {
      listaTodosActualizadaMia[index].completed = true;
    }
    saveTodos(listaTodosActualizadaMia);
  };

  const eliminarTodo = (index) => {
    const listaTodosActualizada = [...todos];
    listaTodosActualizada.splice(index, 1);
    saveTodos(listaTodosActualizada);
  };

  return (
    // para poder que todos los componentes de la app lean las propiedades desde aqui desde este provider tenemos que
    //colocarle children y tambien pasarle todas las propiedades que queremos que sean leidas en una propiedad value={}
    <TodoContext.Provider
      value={{
        loading,
        error,
        completedTodos,
        totalTodos,
        addTodo,
        searchValue,
        setSearchValue,
        searchedTodos,
        miPropioCompletarTodo,
        eliminarTodo,
        openModal,
        setOpenModal,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
