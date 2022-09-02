export function pintarCanciones(canciones){

let fila=document.getElementById('fila') 

fila.textContent=''
canciones.forEach(function(cancion){
    


let columna=document.createElement('div')
columna.classList.add('col','col-4')
let tarjeta=document.createElement('div')
tarjeta.classList.add('card','shadow','p-3','h-100')
let imagen=document.createElement('img')

imagen.src=cancion.album.images[0].url
imagen.setAttribute('id','img')
let nombre=document.createElement('h3')
nombre.classList.add('text-center','bold')
nombre.textContent=cancion.name

let audio=document.createElement('audio')
audio.classList.add('w-100')
audio.setAttribute('controls','controls')
audio.src=cancion.preview_url

let tituloPopularidad=document.createElement('h5')
tituloPopularidad.classList.add('mt-5','text-center','bold')
tituloPopularidad.textContent='Popularidad '+ cancion.popularity+'%'

let popularidad=document.createElement('progress')
popularidad.classList.add('mb-3','mx-auto','d-block')
popularidad.setAttribute('max','100')
popularidad.setAttribute('id','barra')
popularidad.value=cancion.popularity











tarjeta.appendChild(nombre)
tarjeta.appendChild(imagen)
tarjeta.appendChild(audio)
tarjeta.appendChild(tituloPopularidad)
tarjeta.appendChild(popularidad)
columna.appendChild(tarjeta)
fila.appendChild(columna)

})
}