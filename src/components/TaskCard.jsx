



import React from 'react'



//5 EJEMPLO solo 1 ejemplo no importar
//  import TaskContext from '../context/TaskContext'






// ===============================================================================================================
//CONTEXTO () para poder poder tener acceso al contexto


//para poder usar el contexto osea el componente que contiene todo
import { useContext } from 'react';   //1

//importano del el TaskContext solo el  TaskContext(nombre) que contiene toda la data de los hijos y tambien la suya
import {TaskContext} from '../context/TaskContext'//2





















//==============================================================================================================
//4 EJEMPLO CON SEPARACION DE COMPONENTES 
//este componente separa el componente tasklist, para q sea mejor osea el la lista se separa en un card osea aqui








//DESCOMOMENTART TODO ESTO
//aparte de reciber el tastk completo tambien recibe el id pero oculto o hidden
// export default function TaskCard({task}) {



//     //recordar q todo componente tiene su parte logica que es arriba del return y su parte que mostrara o renderizara que es el div
//   return (
//     <div>
//                 <h1>  {task.title}  </h1>
//                 <p> {task.descripcion}</p>
//                 </div>
//   );
// }


























// //==============================================================================================================
// // 4.2 EJEMPLO  
// // ELIMINACION DE COMPONENTES
// //osea luego de mostrar el listado el usuario podra eliminar cualquier objeto de ese listado


// //DESCOMENTAR TODO ESTO 
// export default function TaskCard({task , deleteTask}) {



//   // function mostrarAlerta(){
//   //   alert(task.id)
//   // }




//   //recordar q todo componente tiene su parte logica que es arriba del return y su parte que mostrara o renderizara que es el div
// return (
//   <div>
//               <h1>  {task.title}  </h1>
//               <p> {task.descripcion}</p>

//               {/* onClick solo ejecuta la funcion cuando das click
//               ademas la funcion estara dentro de 1 funcion anonima  
//               como es 1 funcion dentro de 1 variable debe ejecutarse asi y le enviamos el id del task de solo 1 objeto*/}
//               <button onClick={ () => deleteTask(task.id)}>
//                 Eliminar tarea
//               </button>

//               </div>
// );
// }





























//==============================================================================================================
// 6 EJEMPLO  
// USANDO ESTE COMPONENTE CARD CON EL CONTEXT 



//DESCOMENTAR TODO ESTO 
export default function TaskCard({task }) {





  //USANDO EL TASKCONTEXT OBTENIENDO ACCESO
  //osea con esto ya tenemos acceso al contexto osea al TaskContext(componente padre de todo)
  //en este caso mostraremos en consoloa todos los valores ose la logica q esta arriba del del return
  //recordar que debes importar arriba primero el useContex(pa usar el context) y TaskContext(nombre)
    //reocmendable es que solo se haga esto 1 vez y solo en 1 componente
  //  const valor= useContext(TaskContext)
  //  console.log(valor)
//con esto este componente le pide al taskcontext solo el deletetask que esta dentro de la variable value
//ademas no solo se  pide la funcion si no tambien enviar la data o el id a eliminar al TaskCOntext pa q elimine
const {deleteTask} = useContext(TaskContext);





  // function mostrarAlerta(){
  //   alert(task.id)
  // }




  //recordar q todo componente tiene su parte logica que es arriba del return y su parte que mostrara o renderizara que es el div


  //usando tailwind
   //recordar q hay autocompletoad(control +espacio ) ayuda
  //bg-gray-800 : es background
  //text-white : color del texto
  //p-4 : es el padding
//rounded-md : es el border o circulo
//text-xl , text-sm : es el tamaño del texto
//font-bold : ancho letra
//py-1 : padding en el eje de las y
//capitalize : 1 letra mayuscula
return (
  <div className='bg-gray-800 text-white p-6 rounded-md flex flex-col justify-center items-center '>
              <h1 className='text-xl font-bold capitalize'>  {task.title}  </h1>
              <p className='text-gray-400 text-sm'> {task.descripcion}</p>

              {/* onClick solo ejecuta la funcion cuando das click
              ademas la funcion estara dentro de 1 funcion anonima  
              como es 1 funcion dentro de 1 variable debe ejecutarse asi y le enviamos el id del task de solo 1 objeto*/}
              <button className='bg-lime-500 px-3 py-1 mt-4  hover:bg-lime-700 text-slate-950 rounded font-medium' 
              onClick={ () => deleteTask(task.id)}>
                Eliminar Anime
              </button>

              </div>
);
}






















































//==============================================================================================================
// 5 CREAR CONTEXTO  SOLO ES UN 1 EJEMPLO NO EJECUTAR 


//DESCOMENTAR TODO ESTO
// export default function TaskCard({task , deleteTask}) {



//   // function mostrarAlerta(){
//   //   alert(task.id)
//   // }




//   //recordar q todo componente tiene su parte logica que es arriba del return y su parte que mostrara o renderizara que es el div
//    //  <TaskContext> : toda la informacion de este componente estara en ese componente   <TaskContext>


//   return (


//   <TaskContext>
//   <div>
//               <h1>  {task.title}  </h1>
//               <p> {task.descripcion}</p>

//               {/* onClick solo ejecuta la funcion cuando das click
//               ademas la funcion estara dentro de 1 funcion anonima  
//               como es 1 funcion dentro de 1 variable debe ejecutarse asi y le enviamos el id del task de solo 1 objeto*/}
//               <button onClick={ () => deleteTask(task.id)}>
//                 Eliminar tarea
//               </button>

//               </div>
//               </TaskContext>
// );
// }