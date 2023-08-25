// import logo from "./platzi.webp";
import "./App.css";

import React from "react"; // para que React.Fragment funcione

import { AppUI } from "./AppUI";
import { TodoProvider } from "../TodoContext/TodoContext";

export function App() {
  // AQUI ESTABA TODA LA LOGICA ANTES DE React.createContext() sin embargo la llevamos al archivo de TodoContext
  // para que asi toda la logica y propiedades puedan ser consumidas desde el contexto global por los componentes que
  // lo vaya necesitando

  return (
    <TodoProvider>
      <AppUI />
      {/*de AppUI eliminamos todas la propiedeades que le estabamos pasadon para poderlas leer del provider*/}
    </TodoProvider>
  );
}

export default App;
