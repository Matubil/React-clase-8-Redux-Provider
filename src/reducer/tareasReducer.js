import * as actionTypes from "../actions/action-types";

//el unico que puede modificar el store es el reducer
//el reducer recibe el estado y la accion
//el estado es inmutable, no se puede modificar
//el reducer devuelve un nuevo estado
//el reducer es una funcion pura
//el reducer es el unico que puede modificar el estado

function tareasReducer(state, action){
    let newState = {...state}

    switch(action.type){
        case actionTypes.INIT_TAREAS:
            newState.tareas = action.payload;
            break;
            
        default:
            break;
    }
    return newState;
}

export default tareasReducer;