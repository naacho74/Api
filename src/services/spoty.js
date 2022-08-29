//consumiendo APIS

import{URI,PETICION} from'../helpers/datosPeticionGET.js'
import {pitarCanciones} from '../controllers/controladorPintarCanciones.js'
import {consultarCanciones} from '../services/servicioConsultarCanciones.js'
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
   
   
})


.catch(function(error){
    console.log(error)
})