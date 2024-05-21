import './App.css';
import {useEffect, useState } from 'react';
import FormularioLista from '../AgregarTarea/AgregarTarea';
import ViewLista from '../BorrarTarea/BorrarTarea';


function App() {

  const [lista, setLista] = useState([]);

   // Cargar la lista de tareas desde el almacenamiento local al montar el componente
   useEffect(() => {
    const listaGuardada = JSON.parse(localStorage.getItem('tareas'));
    if (listaGuardada) {
        setLista(listaGuardada);
    }
}, []);

// Actualizar el almacenamiento local cuando la lista de tareas cambie
useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(lista));
}, [lista]);


  return (
    <div className="App">
      <FormularioLista lista={lista} setLista={setLista}/>

       <ViewLista lista={lista} setLista={setLista}/> 
    </div>
  );
}

export default App;
