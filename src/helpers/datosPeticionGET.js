const ID_ARTISTA='1cUpGtXcSQsovNYEZOQgOG'

// 1 para donde voy
export const URI= `https://api.spotify.com/v1/artists/${ID_ARTISTA}/top-tracks?market=US`

const TOKEN='Bearer BQDHUvWLu_ptGUZFyF0A6StQaZmvlTapGaZtSCrOM3wVo3NXp0HQB0eORtmEyyzfQU3dXKH6yVhs0l0vy1swBJdhVn00ccHNJTwFra99UX9fCzbDbcnR98oZyKOqqOch1H92RPlDhPkxnFbScX-PGYfxtkXHUxNtgg-F_h-XDmyBT9ku4Yy-8f3KppbUNDygS0s'

//configurar la peticion

export const PETICION={
    method:"GET",
    headers:{
        Authorization: TOKEN
    }
}