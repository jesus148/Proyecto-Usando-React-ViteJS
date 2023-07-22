import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'



//usando el contexto importamos el componentes pero usamos el que enlgoba o renderiza 
import {TaskContextProvider} from './context/TaskContext'







//PUENTE COMPONENTE


// StrictMode es una herramienta para destacar problemas potenciales en la aplicación. Al igual que Fragment, StrictMode no renderiza nada en la interfaz de usuario. Este modo también activa advertencias y comprobaciones adicionales para sus descendientes.
// basicamente es como una recomendacion para ver si estas poniendo codigo correcto de reactjs



//cremos el root del html pa renderizar pero sin un variable si no defrente
//explicacion de esto basciamente es como enviar solo app , pero usando un contexto TaskContextProvider algo asi como una capa

ReactDOM.createRoot(document.getElementById('root')).render(
  //este React.StrictMode en algunos casoso ejecuta por 2 segunda vez pero en modo oculto el componente o los hijos
  <React.StrictMode>

    {/* llamomos al componentes qur contendra todo osea el contexto que es TaskContextProvider es como una capa*/}
   <TaskContextProvider>


  {/* todo la informacion y componentes y subcomponentes que estan dentro del componente App el principal componentes 
  estaran dentro del TaskContextProvider */}
   <App />


   </TaskContextProvider>




  </React.StrictMode>
)




