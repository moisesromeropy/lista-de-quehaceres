import styles from './BorrarTarea.module.css'
const ViewList =(props) =>{

    const marcarTareaCompleta = (index) => {
        const nuevaListaAuxiliar = [...props.lista];
        nuevaListaAuxiliar[index].estado = !nuevaListaAuxiliar[index].estado;
        props.setLista(nuevaListaAuxiliar);
    };

    const eliminarTareasSeleccionadas = () => {
        const nuevasTareas = props.lista.filter((item, index) => !item.estado);
        props.setLista(nuevasTareas);
    };

    return (
        props.lista.length > 0 &&
        <div className={styles.contenedor}>
            <ul className={styles.listaTareas}>
                {props.lista.map((item, index) => (
                    <li key={index} style={{ textDecoration: item.estado ? 'line-through' : 'none' }}>
                        <label>
                            <input type="checkbox" checked={item.estado} onChange={() => marcarTareaCompleta(index)} /> 
                            Tarea: {item.tarea}, Estado: {item.estado == false ? "Incompleto": "Completo"}
                        </label>
                    </li>
                ))}
            </ul>
            <button type="button" className={styles.botonEliminar}onClick={eliminarTareasSeleccionadas}>Eliminar Tareas Completadas</button>        
            </div>
    )
}

export default ViewList;