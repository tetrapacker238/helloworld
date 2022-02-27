import React from 'react'

const Greet = (props) => {
    console.log(props.name)
    return <h1> Hola {props.name}!</h1>
} 


export default Greet //Estamos exportando la función de forma predefinida,
//y por tanto, puedo cambiarle el nombre al paquete en App.js

//FUNCIONES SIMPLES
//USAR FUNCIONES LO MAS POSIBLE
//AUSENCIA DE KEY "this"
//SOLUCIÓN SIN USAR un STATE
//Prinicpalmente responsable del UI