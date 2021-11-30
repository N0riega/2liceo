let imc=Number(prompt("ingrese su peso en kg"))
if(imc<18.5)
{
    console.log("usted esta bajo de peso")
}else{
    if(imc <25)
    {console.log("su peso es normal")
  }else{
      if(imc<=30)
   {console.log("obesidad")
  }else{
      if(imc <34.9)
      {console.log("obesidad clase I")
   }else{
       if(imc<39.9)
       {console.log("obesidad clase II")}
   }
}