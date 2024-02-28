// import { UseSelector, connect, useSelector } from "react-redux"
// import { useState } from "react";
// import Cabecera from "../components/Cabecera"

//Opcion 1: mapStateToProps + connect
// function mapStateToProps(state){
//     return{
//         titulo: state.titulo,
//         subtitulo: state.subtitulo,

//     }
// }

// export default connect(mapStateToProps)(Cabecera)


import { UseSelector, connect, useSelector } from "react-redux"
import { useState } from "react";
import Cabecera from "../components/Cabecera"
//Opcion 2: Con el hook useSelector
const CabeceraConRedux = ()=>{

    // const [titulo, setTitulo] = useState("SIN TITULO");
    // const [subtitulo, setSubtitulo] = useState("SIN SUBTITULO");
    const [titulo,subtitulo] = useSelector((estadoGlobal)=>{
        return [estadoGlobal.titulo, estadoGlobal.subtitulo]
    })
    return(<Cabecera titulo={titulo} subtitulo={subtitulo}/>);
}

export default CabeceraConRedux;



