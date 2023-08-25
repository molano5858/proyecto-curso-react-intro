// la propiedad .children en REACT quiere decir que cuando creamos un componente que adentro tiene otros componentes
// automaticamente .children se convierte en todo eso que tiene adentro el componente mas grande o el padre por asi decirlo
// aqui tenemos que recibimos props y abajo usamos props.children pero tambien pudemos recibir {children} y abajo
// usar {children} y funcionaria igual

// function TodoList(props) {
//   return <ul>{props.children}</ul>;
// }

import "./TodoList.css";

function TodoList({ children }) {
  return <ul className="TodoList">{children}</ul>;
}

export { TodoList };
