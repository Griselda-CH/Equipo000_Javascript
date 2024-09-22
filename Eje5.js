
/*
5.. En este ejercicio se hará el código para una agencia de viajes,
Se le preguntará al usuario a donde quiere viajar.
Se podrá hacer la conversión de la moneda mexicana a euros.
Se crea una variable "ahora", y por la funcion "new date" se obtiene la fecha y mediante ello se obtiene la hora actual.
Se calcula el cambio de horario del pais en milisegundos.
La variable "nuevaHora" guarda la hora que se calculó y con la función "getTime"  se reinicia el tiempo después de las 12.
Mostramos el resultado con la funcion "toLocaleString" en formato de hora. 
*/


let pregunta_pais= prompt("¿ A que pais quieres viajar? ");
let dinero= parseFloat(prompt("¿ Con cuanto persives para vacacionar en moneda Mexicana?"));
let calculo;


if(pregunta_pais=="Alemania"){
    calculo= dinero*0.046;
console.log("El total en EUROS es",calculo)
const ahora = new Date();
const cambioHorario = 8;
const nuevaHora = new Date(ahora.getTime() + cambioHorario * 60 * 60 * 1000); 
console.log("La hora en alemania es ", nuevaHora.toLocaleString());
console.log("El idoma que se practica es aleman ");

}else if(pregunta_pais=="Australia"){
    calculo= dinero*0.076;
console.log("El total de Dolares Australianos",calculo)
const ahora = new Date();
const cambioHorario = 16;
const nuevaHora = new Date(ahora.getTime() + cambioHorario * 60 * 60 * 1000); 
console.log("La hora en austria es ", nuevaHora.toLocaleString());
console.log("El idoma que se practica es ingles australiana ");

}else if(pregunta_pais=="Argentina"){
    calculo= dinero*49.75;
console.log("El total de pesos Argentinos  es",calculo);
const ahora = new Date();
const cambioHorario = 3;
const nuevaHora = new Date(ahora.getTime() + cambioHorario * 60 * 60 * 1000);
console.log("La hora en Argentina es ", nuevaHora.toLocaleString());
console.log("El idoma que se practica es español ");

}else{
    console.log("Pais No Disponible ")
    
}





