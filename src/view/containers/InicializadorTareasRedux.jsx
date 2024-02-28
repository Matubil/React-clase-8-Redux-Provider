import axios from 'axios';
import * as actionCreators from '../../actions/action-creators';
import { useEffect } from 'react';
//envia al reducer una accion para que modifique el estado
import { useDispatch } from 'react-redux';

const InicializadorTareasRedux = () => {

    const dispatch = useDispatch();

    useEffect( () => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then((response) => {
                let accion = actionCreators.actionInicializarListaTareas(
                    response.data.map((tarea) => ({
                        id: tarea.id,
                        nombre: tarea.title,
                        done: tarea.completed
                    }))
                );
                dispatch(accion);
        });
        // console.log(response)
    }, []);
    return (<></>)
}

export default InicializadorTareasRedux;