import { useEffect, useState } from "react";
import styles from './AgregarTarea.module.css';
const FormularioLista = (props) => {
    const [listaAuxiliar, setListaAuxiliar] = useState({ tarea: "", estado: false });

    const agregarLista = (event) => {
        event.preventDefault();
        if (listaAuxiliar.tarea.trim() !== "") {
            // Si no está vacío, agregar la tarea a la lista
            props.setLista([...props.lista, listaAuxiliar]);
            // Reiniciar el estado del input
            setListaAuxiliar({ tarea: "", estado: false });
        } else {
            // Si el campo de tarea está vacío, mostrar un mensaje de error o tomar otra acción
            alert("Por favor, ingresa una tarea antes de agregarla.");
        }
    };

    return(
        <div>
            <form onSubmit={agregarLista} action="">
                <label className={styles.label} htmlFor="Lista">Nueva tarea:</label>
                <input className={styles.input} type="text" value={listaAuxiliar.tarea} onChange={(e) => setListaAuxiliar({ tarea: e.target.value, estado: false })} name="lista" id="lista" />
                <input className={styles.button} type="submit" value="Agregar Tarea" />
            </form>
            
        </div>
    );
};

export default FormularioLista;