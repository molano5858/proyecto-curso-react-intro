import React from "react";
import { CreateTodoButton } from "../CreateTodoButton/CreateTodoButton";
import { TodoList } from "../TodoList/TodoList";
import { TodoITem } from "../TodoItem/TodoItem";
import TodoCounter from "../TodoCounter/TodoCounter.js";
import { TodoSearch } from "../TodoSearch/TodoSearch"; // se importa asi porque lo exporte con llaves en el otro archivo, esto
// nos puede evitar posibles errores porque para que funcione aqui tengo quee scribir exactamente TodoSearch
import { TodosLoading } from "../TodosLoading/TodosLoading.js";
import { TodosError } from "../TodosError/TodosError.js";
import { EmptyTodos } from "../EmptyTodos/EmptyTodos.js";
import { Modal } from "../Modal/Modal.js";
import { TodoForm } from "../TodoForm/TodoForm.js";
import { TodoContext } from "../TodoContext/TodoContext.js";

function AppUI() {
  const { openModal, setOpenModal } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      {/* <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      a estos componentes ya no les pasamos propiedades porque las vamos a leer del contexto globar
      por eso para usar este par de componentes los colocamos limpios sin ninguna propiedad, y dentro
      de sus respectivos archivos usamos el React.useContext() para poder leer esas propiedades */}

      <TodoCounter />
      <TodoSearch />

      <TodoContext.Consumer>
        {/*tenemos que envolver el elemento que quiere consumir las propiedades globales con el TodoContext.Consumer
        Pero el consumer no espera que le pasemos el elemento tal cual si no que utiliza algo que se llama RENDER FUNCTIONS
        esto quiere decir qu espera que le pasemos una funcion, asi que abrimos llaves (para escribir JSX) luego una arrow
        que se ejecute sola es decir ()=> (codigo)y luego le pasamos todas las propiedades que necesitamos al componente TodoList en este caso

        MUCHO OJO, 
        esto se puede hacer con las RENDER FUNCTIONS o tambien se puede hacer este mismo proceso usando
        React.useContext() este lo usamos en TodoCounter.js y TodoSearch.js


        */}

        {({
          loading,
          error,
          searchedTodos,
          miPropioCompletarTodo,
          eliminarTodo,
        }) => (
          <TodoList>
            {/*vamos a mostrar el estado de carga*/}
            {loading && (
              <>
                <TodosLoading />
                <TodosLoading />
                <TodosLoading />
              </>
            )}

            {/*vamos a mostrar el estado de error*/}
            {error && <TodosError />}

            {/*Si no estamos cargando ni tampoco estamos cargando y el array de todos esta vacio mostremos algo diferente*/}
            {!loading && searchedTodos.length === 0 && <EmptyTodos />}

            {searchedTodos.map((todoItem, index) => {
              return (
                <TodoITem
                  key={index}
                  text={todoItem.text}
                  completed={todoItem.completed}
                  eventoCreadoPorMi={() => miPropioCompletarTodo(index)}
                  onDelete={() => eliminarTodo(index)}
                />
              );
            })}
          </TodoList>
        )}
      </TodoContext.Consumer>
      <CreateTodoButton setOpenModal={setOpenModal} />

      {/*Creacion y tulizacion de React portals*/}
      {/*openModal es un estado la logica dela siguiente linea openModal && es que si es true entonces haga lo que sigue*/}
      {/*debemos crear este estado en el contexto que estamos trabajando, es decir TodoContext*/}
      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
    </React.Fragment>
  );
}

export { AppUI };
