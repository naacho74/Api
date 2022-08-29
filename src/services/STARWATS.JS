const URI= "https://swapi.dev/api/planets"


const PETICION={
    method: "GET"}

fetch(URI,PETICION)
.then(function(respuesta){
    return respuesta.json()
})

.then(function(respuesta){

    let fila=document.getElementById('tabla') 
    let conteoPlaneta=1
    respuesta.results.forEach(function(planeta){  
    console.log(  planeta)
    console.log( typeof planeta)

    let columnaTabla=document.createElement('tr')
    columnaTabla.classList.add('text.center')
   let conteo=document.createElement('th')
   conteo.classList.add('text.center')
   conteo.textContent=conteoPlaneta++
    let nombre=document.createElement('td')
    nombre.classList.add('text-center','bold')
    nombre.textContent=planeta.name

    let diametro=document.createElement('td')
    diametro.classList.add('text-center')
    diametro.textContent= planeta.diameter

    let temperatura=document.createElement('td')
    temperatura.classList.add('text-center')
    temperatura.textContent=planeta.climate
    
    columnaTabla.appendChild(conteo)
    columnaTabla.appendChild(nombre)
    columnaTabla.appendChild(diametro)
    columnaTabla.appendChild(temperatura)
    fila.appendChild(columnaTabla)
  })

})
   
  .catch(function(error){
    console.log(error)
})


