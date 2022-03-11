let urlcarafeliz = "https://images.emojiterra.com/google/android-10/512px/1f60a.png"
let urlcaratriste = "https://cdn-0.emojis.wiki/emoji-pics/facebook/pensive-face-facebook.png"
let imgHtml = document.querySelector("#imagencara")
do{
    nota1 = parseInt(prompt("ingrese su primera nota "))
} while (isNaN (nota1)|| nota1<0 || nota1>10)
do{
    nota2 = parseInt(prompt("ingrese su segunda nota "))
} while (isNaN (nota2) || nota2<0 || nota3>10)
do{
    nota3 = parseInt(prompt("ingrese su tercera nota "))
} while (isNaN (nota3) || nota3<0 || nota3>10)
let p = (parseFloat(nota1)+parseFloat(nota2)+parseFloat(nota3))/3;
alert("Su promedio es: "+ p)
if (p>6){
    imgHtml.src = urlcarafeliz
}
else{
    imgHtml.src = urlcaratriste
}