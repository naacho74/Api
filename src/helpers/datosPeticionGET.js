import { obtenerToken } from "../services/servicioGenerarToken.js"
const ID_ARTISTA='1cUpGtXcSQsovNYEZOQgOG'

// 1 para donde voy
//export const URI= `https://api.spotify.com/v1/artists/${ID_ARTISTA}/top-tracks?market=US`

let token=await obtenerToken()
console.log(token)
console.log(token.token_type)

console.log(token.access_token)
const TOKEN= token.token_type+' '+token.access_token

//configurar la peticion

export const PETICION={
    method:"GET",
    headers:{
        Authorization: TOKEN
    }
}