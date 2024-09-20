
/*Reeedaccion del problelñmñ,ñ´ñ,-.,ma*/


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





