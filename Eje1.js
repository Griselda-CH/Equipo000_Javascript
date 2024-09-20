/* 1.Cálculo de Índice de Masa Corporal (IMC):
Escribe un programa que pregunte al usuario su peso en kilogramos
y su altura en metros. Calcula el Índice de Masa Corporal (IMC) usando la fórmula
IMC = peso / (altura * altura) y muestra la categoría correspondiente según
el IMC (bajo peso, normal, sobrepeso, obesidad). (10 p) */
//Se declaran las variables donde se gurdaran los datos
let peso = parseFloat(prompt("Ingresa tu peso en Kilogramos"));
let altura = parseFloat(prompt("Ingresa tu altura en Metros"));
if (peso == "0" || altura =="0"){
    console.log("Datos Invalidos");
    console.log("IMC Invalido");  
} else { 
    const imc = peso / (altura ** 2);
    console.log("Tu IMS es.",imc);                             
if (imc < 18.49) {
    console.log("Tu categoria es: peso bajo");
} else if (imc >= 18.49 && imc < 24.99) {
    console.log("Tu categoria es: peso normal");
} else if (imc >= 25 && imc < 29.9) {
    console.log("Tu categoria es: sobrepeso");
} else if (imc >= 30 && imc < 39.99) {
    console.log("Tu categoria es: obesidad");
} else  {
    console.log("obesidad extrema");
} 

}



