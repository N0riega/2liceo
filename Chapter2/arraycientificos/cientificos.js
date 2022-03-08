urlsImg=["https://upload.wikimedia.org/wikipedia/commons/9/99/Volta_A.jpg","https://www.biografiasyvidas.com/biografia/n/fotos/newton.jpg","https://upload.wikimedia.org/wikipedia/commons/f/f1/Charles_Darwin_portrait.jpg"]
nombres=["Volta","Isaac Newton","Charles Darwin"]
html = ""
html=html + `<div class="cientifico"/> <img src="${urlsImg[0]}"/><p>${nombres[0]}</p></div>`
html=html + `<div class="cientifico"/> <img src="${urlsImg[1]}"/><p>${nombres[1]}</p></div>`
html=html + `<div class="cientifico"/> <img src="${urlsImg[2]}"/><p>${nombres[2]}</p></div>`
contenedor=document.querySelector("#Contenedor")
contenedor.innerHTML=html

