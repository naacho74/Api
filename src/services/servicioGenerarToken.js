
//Generar un token automatico

//configurar la URI
const URI='https://accounts.spotify.com/api/token'

//datos de envio
const DATO1='grant_type=client_credentials'
const DATO2='client_id=eccafbde1cd94dd4b26129eb2ff198bb'
const DATO3='client_secret=c65a1ea90c334d2f80e4ad0d686b0f4f'

//PETICION
const PETICION={
    method:'POST',
    headers:{},
    body:DATO1+'&'+DATO2+'&'+DATO3
}

//fetch