let pais
let temperatura
let estatura
do{
    pais = prompt("De que pais viene? (USA o de COL)")
}while(pais !="COL" && pais !="USA")
if (pais=="COL"){
    do {
        estatura=Number(prompt("¿A que temperatura esta?(°C)"))
    }while (isNaN(estatura)&&estatura>40);
    do{
        temperatura=Number(prompt("¿Cuanto mide?(m)"))
    } while (condition);

 }
 if (pais == "USA"){
     do{
         estatura=Number(prompt("¿A que temperatura esta?(°F)"))
     }while (isNaN(estatura)&&estatura>40);
     do{
         temperatura=Number(prompt("¿Cuanto mide?(pies)"))
     } while (condition)
 }
  