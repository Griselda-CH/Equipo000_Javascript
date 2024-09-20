/*4..Escribe un programa que pregunte al usuario el total de su compra y si tiene
 un código de descuento. Si el código es "DESCUENTO10", se aplicará un 10% de descuento.
  Si el código es "DESCUENTO20", se aplicará un 20% de descuento. Muestra el total 
  después de aplicar el descuento, si corresponde, y un mensaje si el código no es válido.
   (10p)*/


   let compra= parseFloat(prompt("Total de su compra "));
   let pregunta= prompt("Tiene un código de descuento (sí/no)");
   let descuento;
   let  resultado;
 if(pregunta == "si"){
    let codigo;
   codigo = prompt("Ingresa tu còdigo de descuento ");
   if(codigo == "Descuento10")
    {
    descuento = (compra*10)/100
    resultado= compra -descuento;
    console.log("Se aplico el 10% de descuento el total es: ",resultado);
    }   
else if (codigo == "Descuento20")
    {
    descuento = (compra*20)/100
    resultado= compra -descuento;
    console.log("Se aplico el 20% de descuento el total es: ",resultado);
    }
 else{
    console.log("codigo no valido");
 }
}

else{
    console.log("no tienes descuento",compra);

}
