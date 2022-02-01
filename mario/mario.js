
function piso(nPiso, altura){
  nEspacios = altura - nPiso;
  nNumerales = nPiso;
  texto="<p>"
  for(let i=0 ; i< nEspacios ; i++)
  {
    texto=texto+"&nbsp";
  }
  for(let i=0; i<nNumerales ; i++)
  {
    texto=texto+"#";
  }
texto=texto+"</p>";
return texto;
}
let nPisos;
do{    
nPisos = parseInt((prompt("ingrese un numero entre 1 y 10 para la altura de la escalera")))
}while(isNaN (nPisos)|| nPisos<1||nPisos>10)
let contenido = "";
for(let i = 1; i <= nPisos; i++){
    contenido = contenido + piso(i, nPisos)
}


 
let contenedor = document.querySelector("#contenedor");
contenedor.innerHTML = contenido;
 
 
