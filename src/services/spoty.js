//consumiendo APIS

// 1 para donde voy
const URI= "https://api.spotify.com/v1/artists/2ye2Wgw4gimLv2eAKyk1NB/top-tracks?market=US"

//configurar la peticion

const PETICION={
    method:"GET",
    headers:{
        Authorization:
        "Bearer BQAvvWogY69j665YJjo-EBKSYNsuqUoGA_gSafcDMeVPYQFiskTOYg4TCe4xrqD3tqZjYp1xwvEmL5a8VPlWsIemAEOqMq2Ly59UNUjGlmyP40r1xd9gz1DbyMoCTpMETdhKtfExM3gX3HrTtkzJHOlB8tAU18_CMVyj0piVdMMiWBoq6jNfGvtTnYA8MDA2EcQ"
    }
}

//3. arranca pues

//consumo el API

fetch(URI,PETICION)
.then(function(respuesta){
    return respuesta.json()
})

.then(function(respuesta){
    console.log(respuesta)
    console.log(respuesta.tracks)
    let fila=document.getElementById('fila') 
    respuesta.tracks.forEach(function(cancion){
        
        
        console.log(cancion.name)
        console.log(cancion.preview_url)
        console.log(cancion.popularity)
        console.log(cancion.album)
        console.log(cancion.album.images[0].url)
    
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

    let popularidad=document.createElement('h4')
    popularidad.textContent=cancion.popularity

    tarjeta.appendChild(nombre)
    tarjeta.appendChild(imagen)
    tarjeta.appendChild(audio)
    tarjeta.appendChild(popularidad)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)


    })
   
})


.catch(function(error){
    console.log(error)
})