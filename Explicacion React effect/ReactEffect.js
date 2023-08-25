// INICIO EXPLICACION React.useEffect(funcion, [])
// el primer argumento es una funcion, el segundo un array que puede contener informacion o algun estado
// useEffect lo que hace es ejecutar este codigo solo una vez independientemente de los cambios de estado de otros
// estados.
// Ejemplo 1
// console.log(1); //este aparece de primero
// React.useEffect(() => console.log(2)); //este aparece de ultimo
// console.log(3); //este aparece de segundo

// Ejemplo 2
// console.log(1); //se vuelve a renderizar cuando hay un cambio de estado en la app
// React.useEffect(() => console.log(2), []); //NO SE VUELVE A RENDERISAR, es decir solo se renderiza una vez
// console.log(3); //se vuelve a renderizar cuando hay un cambio de estado en la app

// Ejemplo 3
//console.log(1); //
//React.useEffect(() => console.log(2), [totalTodos]); //SOLO SE VA A RENDERIZAR CUANDO EL ESTADO QUE LE PASAMOS COMO ARGUMENTO CAMBIE
//console.log(3); //

// FIN EXPLICACION React.useEffect
