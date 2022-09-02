const ID_ARTISTA='1cUpGtXcSQsovNYEZOQgOG'

// 1 para donde voy
//export const URI= `https://api.spotify.com/v1/artists/${ID_ARTISTA}/top-tracks?market=US`

const TOKEN='Bearer BQB0trDPpJx116tQnh18wL3EgtXqXsux-_M9Yf_I0Dbd4XiesM4n41d883WrMXWTMjsDhtAyDgeFm43xPJiUgO6NKDjf-UzihhNXsKIFCFf5lDmAn8z1gd0lkjqe3oBlD9mZqc0oOT4ola3RSOzbwBCByLIR_vDJmbIoopP2UKloWBzucxqVu6_54j7i-46Hjzo'

//configurar la peticion

export const PETICION={
    method:"GET",
    headers:{
        Authorization: TOKEN
    }
}