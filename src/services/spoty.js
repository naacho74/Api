//consumiendo APIS

import{URI,PETICION} from'../helpers/datosPeticionGET.js'
import {pintarCanciones} from '../controllers/controladorPintarCanciones.js'
import {consultarCanciones} from '../services/servicioConsultarCanciones.js'

//funcion para consumir
let canciones=await consultarCanciones(URI,PETICION)

console.log(canciones.tracks[1].album)

pintarCanciones(canciones.tracks)


