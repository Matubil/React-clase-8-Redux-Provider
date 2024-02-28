import * as actionTypes from "../actions/action-types";

export function actionInicializarListaTareas(tareas){
    return{
        type: actionTypes.INIT_TAREAS,
        payload: tareas
    }
}