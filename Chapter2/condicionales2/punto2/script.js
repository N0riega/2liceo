velocidad=Number(prompt("cual es la velocidad inicial que tiene el proyectil?(m/s2)"))
posicion=Number(prompt("A que altura desea que llegue el proyectil? (m)"))
let t=(0-velocidad)/(0-9.8)
let desplazamiento=(velocidad*t)-((9.8*t*t)/2)
if (desplazamiento >= posicion) {
    respuesta= "el proyectil logra llegar"
} else{
    respuesta= "el proyectil no logra llegar"
}
