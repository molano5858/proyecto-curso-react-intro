import React from "react";

// CUSTOM HOOK

function useLocalStorage(itemName, initialValue) {
  // creando el estado de nuestro CUSTOMO HOOK
  // aqui todo en ves de todos se va a llamar item, solo porque el profe quiso, como haciendo referencia de que como
  // este CUSTOM HOOK  es creado para localStorage, y todo localStorage use items, entonces asi lo llamamos
  // lo creamos abajo de la logica de ver si habia algo en local storage para poderle pasar esa info como estado inicial
  const [item, setItem] = React.useState(initialValue);

  // creacion de estados iniciales de carga y de error

  const [loading, setLoading] = React.useState(true); // por defecto este estado cargando estara funcionando (true) hasta
  // que mas adelante le digamos que sea false(osea cuando ya haya cargado)

  const [error, setError] = React.useState(false);

  const localStorageItem = localStorage.getItem(itemName);

  let parsedItem;

  // uso de React.Effect vamos a simular que el uso de localStorage se demora unos segundos (como simulando el consumo
  //de una API)

  React.useEffect(() => {
    console.log("tengo que aparecer solo 1 vez");
    setTimeout(() => {
      try {
        if (!localStorageItem) {
          parsedItem = initialValue;
          localStorage.setItem(itemName, JSON.stringify(initialValue));
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }, 2000);
  }, []); // si no le coloco el ",[]" ocasionaria que el efecto actualice el estado y el estado el efecto y se quede bucle
  // infinito, por eso le paso un array vacio para protegerlo y que no se cargue continuamente

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return [{ item, saveItem, loading, error }]; // agregamos el retorno de los estados de loading y error
}

export { useLocalStorage };

// RENDERIZAR ARRAYS
// const todoArray = [
//   { text: "Tarea #1", completed: true },
//   { text: "TAREA #2", completed: true },
//   { text: "Tarea #3", completed: false },
//   { text: "Tarea #4", completed: false },
//   { text: "Tarea #5", completed: false },
//   { text: "FELIPE", completed: false },
//   { text: "felipe", completed: true },
// ];
