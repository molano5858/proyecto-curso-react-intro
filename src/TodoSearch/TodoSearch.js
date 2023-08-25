import React from "react";
// importamos react para trabajar con ESTADOS
import "./TodoSearch.css";

// vamos a crear la funcionalidad que escuche los cambios que estan en el TodoSearch, yo lo habia hecho con el
// onKeydown pero es mejor como lo hizo el profesor con el evento onChange. para poder que guarde la cadena de letras
// que estamos escribiendo
// el event.target nos selecciona el elemento html en este caso el input y recuerda que input tiene la propiedad
// por eso el profe escribe event.target.value para tomar el valor de la letra que escribimos

// vamos a importar el TodoContext pero aqui lo vamos a consumir de una manera distinta usando React.useContext
import { TodoContext } from "../TodoContext/TodoContext";

function TodoSearch() {
  // puedo escribit props y luego usar abajo props.searchValue o puedo hacer destructuracion

  // empezamos a usar ESTADOS
  // los valores del array deben ser 'nombre', setNombre
  // el segundo elemento es una funcion actualizadora del estado para que no afecte los procesos de inmutabilidad y noafecte
  // el historial de estados.
  // React.useState() le podemos pasar como parametro el estado inicial para hacer el render, como valor por defecto,
  // en este ejemplo colocamos un string vacio '' como estado inicial
  //
  // const [searchValue, setSearchValue] = React.useState(""); ESTE ESTADO LO LLEVAMOS AL COMPONETE PADRE APP PORQUE
  // los estados no pueden compartirde de un padre a un hijo, osea que debe estar alla.

  // value={searchValue} con esto estamos
  // setSearchValue(event.target.value) estamos pasandole a la funcion actualizadora del estado de react para que
  // en este caso cada vez que haya un cambio en la funcion onChange se actualice el estado. si no hacemos esto se podria
  // escribir en el input pero no se veria lo que escribimos

  //
  //console.log(searchValue);

  const { searchValue, setSearchValue } = React.useContext(TodoContext);

  return (
    <input
      placeholder="Escribe tu tarea"
      className="TodoSearch"
      value={searchValue}
      onClick={(event) => {
        console.log("tienes el focus en el search");
      }}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
    />
  );
}

export { TodoSearch };
// exportar un objeto lo que nos permite es que sea estricto al momento de importarlo en el otro archivo, es decir
// se tiene que escribir igualito aqui que alla lo que nos puede evitar muchos errores.
// al importarlo hay que hacerlo con llaves tambien
