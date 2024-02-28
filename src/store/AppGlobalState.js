import { configureStore } from "@reduxjs/toolkit"
import tareasReducer from "../reducer/tareasReducer";

const defaultData ={
    /*Paremos las rotativas */
    /*Aca  va la informacion del negocio*/
    /*Por un tema didactico agrego tambien cosas adicionales como el titulo y subtitulo*/
    titulo: "Bienvenidos al curso de Redux",
    subtitulo: "Hoy seguimos a full con Redux",

    tareas: []
    /*tareas: [
        {id:1, nombre:"Ver Serie The Waling Dead", done:false},
        {id:2, nombre:"Sale Cafecito", done:false},
        {id:3, nombre:"Salir a un bar", done:false},
        {id:4, nombre:"Leer el manga de One Puch Man", done:false},
    ]*/
}

export default configureStore({
    preloadedState : defaultData,
    //reducer: (s,a)=>(s) /*el primero devuelve el state y la a es de action */
    reducer: tareasReducer
});