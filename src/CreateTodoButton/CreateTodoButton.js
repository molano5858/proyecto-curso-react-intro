import "./CreateTodoButton.css";

function CreateTodoButton({ setOpenModal }) {
  return (
    <button
      className="CreateTodoButton"
      onClick={() => {
        // vamos a llamar al actualizador del estado setOpenModal y le vamos a decir que si el estado esta en true
        // pase a false y si esta en false pase a true, esto se logra con el negativo, es decir estamos devolviendo el
        // negativo que tenga en ese momento el estado
        setOpenModal((state) => !state);
      }}
    >
      +
    </button>
  );
}

export { CreateTodoButton };
