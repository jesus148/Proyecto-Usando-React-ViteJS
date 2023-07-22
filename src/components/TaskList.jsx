

//COMPONENTE HIJO O OTRO COMPONENTE
//RECORDAR QUE AL USAR VITE.JS ES nesecario poner el jsx como extension

import React from 'react'




//1 EJEMPLO SIN ALIAS
// import {tasks} from './tasks'





//importando la data osea como una api de tasks.js
//y le pondremos un alias pa evitar conflictos con otras variables
// import {tasks as data} from './tasks'

import {tasks as data} from '../data/tasks'



//importando los hooks
import {useState , useEffect} from 'react'



//mosstrando la data de task.js
// console.log(data);



//4 EJEMPLO
//importando el componente para SEPARA COMPONENTES  osea el card solo mostrar una parte de la lista
import TaskCard  from './TaskCard'








//USANDO EL CONTEXTO
// osea con exto tenemos acceso al componente contexto osea a su data

import {useContext} from 'react'//1  osea para usar el contexto 
import {TaskContext} from '../context/TaskContext'//2  obtiene acceso al contexto osea a su data








//COMPONENTE SECUNDARIO 
//ESTE ES EL FOMR DE ABAJO OSEA LAS LISTAS EL SEGUNDO FORM




// ================================================================================================
// 1 EJEMPLO
//DESCOMENTAR SOLO ESTO
// export default function TaskList() {




// // tip para comletar rapido esto
// // escirbir uses y saldran opciones 
// //elegir  usestatesnippet y saldra todo esto
//   const [tasks, setTasks] = useState([])



//   //saldra esto pq el task array declarado en la constante esta vacio
// if(tasks.length ===0){

//   return <h1>no hya nada</h1>


// }


// //como el array constante esta vacio no saldra esto
//   return (
//     <div>

//       {  tasks.map( (task) => (
//           <div>      tarea   </div>
//         )) }

//     </div>
//   );
// }




















// ================================================================================================
// 2 EJEMPLO
//mostrando la lista de tareas


//en este ejemplo usaremos tanto el usestate y tambien el useeffect 
//para usar dentro de esta funcion los tasks.js archivo data 
//debemos incializar primero useState([]) osea el array del usestate
//osea primero debe cargar el componente  osea toda la funcio TaskList() y luego le pasaremos los tasks data q tiene un alias
//luego de cargar el componente osea la funcion tasklist , usaremos el useeffect para pasar la data task a este componente



// DESCOMENTAR SOLO ESTO
// export default function TaskList() {


// // tip para comletar rapido esto
// // escirbir uses y saldran opciones 
// //elegir  usestatesnippet y saldra todo esto
// //tasks es un array vacio al cargar la app que tendra toda la data de task.js q le pásara el useeffect
//   const [tasks, setTasks] = useState([])






//   //una vez cargado el componente o funcion TaskList() 
//   //usaremos el setTasks para modificar y agregar toda la data(alias ) del task.js en la variable tasks de array
//   useEffect ( ()=>{
//       setTasks(data)
//   }, [])








//no sale esto
// if(tasks.length === 0){

//   return <h1>no hya nada</h1>


// }



//en un componente me devuelve solo el return la logica esta arriba del return
//   return (

//     //esto se ejectara despues q el useefect le pasa toda la data al array vacio tasks
//     //con este map : creara otro array no escribe en el mismo recordar q para eso sirve el map
//     //hara un recorrido y mostrara fila * fila del array
//     //recordar que  tasks.map( (task) => ( el tasks data se almacena en el task
//     //ademas recordar por cada elemento debe tener un key unico en la etiqueta raiz en este caso le pondremos al div q contiene todo  La etiqueta raíz de cada componente debe tener una extensión key. No tiene que ser único.
//     <div>

//       {  tasks.map( (task) => (
//         <div key={task.id}>
//           <h1>  {task.title}  </h1>
//           <p> {task.descripcion}</p>
//           </div>
//         )) }

//     </div>
//   );
// }






















//==================================================================================================
//3 EJEMPLO   REDIRIGITE AL TASKFORM.JS

//esto es lo mismo de arriba pero esta vez lo relacionaremos con el taskform para el proyecto
//Añadiendo tareas desde el formulario
//añadiendo tareas dentro de la lista de tareas
//para eso nescitamos un procion de interfaz
//osea luego de lista lo de arriba queremos ahi mismo en la pagina agregar tareas o el usuario pueda agregar tareas
//osea basicamentes tendremos en la pagina un form arriba para crear tareas mediante el input y con ese task creado
//lo guardaremos en el TaskList componente q esta debajo del form pa q lo muestre


//props :recordar cuando pones props pro defecto recibe todo el objeto y de ahi veremos q dato queremos
//tambien puedes ponerle dentro del TaskList({tasks}) : es como el props pero recibe especifica



//DESCOMENTAR SOLO ESTO
// export default function TaskList(props) {







//   ////esto lo pondremos en el mismo App.jsx(por qu ahi debe estar y de nos manda esa data aqui)
//   ////no descomentar esto esto le partenece al componente de arriba
//   // // tip para comletar rapido esto
//   // // escirbir uses y saldran opciones 
//   // //elegir  usestatesnippet y saldra todo esto
//   // //tasks es un array vacio al cargar la app que tendra toda la data de task.js q le pásara el useeffect
//   //// [] esto significa que solo se mostrara 1 vez q se renderize
//   //   const [tasks, setTasks] = useState([])

//   //   //una vez cargado el componente o funcion TaskList() 
//   //   //usaremos el setTasks para modificar y agregar toda la data del task.js en la variable tasks
//   //   useEffect ( ()=>{
//   //       setTasks(data)
//   //   }, [])
  
  
  
  
  
  
  
  
  
//   if(props.tasks.length === 0){
  
//     return <h1>no hya nada</h1>
  
  
//   }
  
  
  
//     return (
  
//       //esto se ejectara despues q el useefect le pasa toda la data al array vacio tasks
//       //con este map : creara otro array no escribe en el mismo recordar q para eso sirve el map
//       //hara un recorrido y mostrara fila * fila del array
//       //recordar que  tasks.map( (task) => ( el tasks data se almacena en el task
//       //ademas recordar por cada elemento debe tener un key unico en la etiqueta raiz en este caso le pondremos al div q contiene todo  La etiqueta raíz de cada componente debe tener una extensión key. No tiene que ser único.

      
//       <div>
  
//         { props.tasks.map( (task) => (
//           <div key={task.id}>
//             <h1>  {task.title}  </h1>
//             <p> {task.descripcion}</p>
//             </div>
//           )) }
  
//       </div>
//     );
//   }
  
  


























// ==================================================================================
//4 EJEMPLO 
//USANDO LA SEPARACION DE COMPONENTES
//separa componentes significa que los subcomponentes como taskfomr y el tarsklist se pueden dividir en otros componentes
//lo ideal siempre es separa componentes  estamos separando la párte del return props.tasks.map( (task) 
//eso estara en el TaskCard.jsx 

//DESCOMENTAR TODO
// export default function TaskList(props) {







//   ////esto lo pondremos en el mismo App.jsx(por qu ahi debe estar y de nos manda esa data aqui)
//   ////no descomentar esto esto le partenece al componente de arriba
//   // // tip para comletar rapido esto
//   // // escirbir uses y saldran opciones 
//   // //elegir  usestatesnippet y saldra todo esto
//   // //tasks es un array vacio al cargar la app que tendra toda la data de task.js q le pásara el useeffect
//   //// [] esto significa que solo se mostrara 1 vez q se renderize
//   //   const [tasks, setTasks] = useState([])

//   //   //una vez cargado el componente o funcion TaskList() 
//   //   //usaremos el setTasks para modificar y agregar toda la data del task.js en la variable tasks
//   //   useEffect ( ()=>{
//   //       setTasks(data)
//   //   }, [])
  
  
  
  
  
  
  
  
  
//   if(props.tasks.length === 0){
  
//     return <h1>no hya nada</h1>
  
  
//   }
  
//   //recordar q todo componente tiene su parte logica que es arriba del return y su parte que mostrara o renderizara que es el div
  
//     return (
  
//       //esto se ejectara despues q el useefect le pasa toda la data al array vacio tasks
//       //con este map : creara otro array no escribe en el mismo recordar q para eso sirve el map
//       //hara un recorrido y mostrara fila * fila del array
//       //recordar que  tasks.map( (task) => ( el tasks data se almacena en el task
//       //ademas recordar por cada elemento debe tener un key unico en la etiqueta raiz en este caso le pondremos al div q contiene todo  La etiqueta raíz de cada componente debe tener una extensión key. No tiene que ser único.

      
//       <div>
  
//         { props.tasks.map( (task) => (
     

//      // la parte de aqui de este list estamos separando los componentes en el taskCard esta esa parte
//      //esto se ejecuta al principio el listado 
//      //y tambien cuando se crea 1 objeto en la lista
//      // key={task.id} : el key lo envia igual pero sera oculto o hidden , ademas sera para cuando cremos objetos
//      //key={task.id} : obtiene solo el id
//      //task={task} : obtiene todo el objeto task
//               <TaskCard key={task.id} task={task} />

//           )) }
  
//       </div>
//     );
//   }
  
  

























// ====================================================================================================
  //EJEMPLO ELIMINAR 
  //osea luego de mostrar el listado el usuario podra eliminar cualquier objeto de ese listado




 
  
//   //DESCOMENTAR TODO ESTO
// //recordar que tasks son el nombre de las varibble q almacenan el valor en el App.jsx obviamente es el props especifico
// export default function TaskList({tasks , deleteTask}) {







//   ////esto lo pondremos en el mismo App.jsx(por qu ahi debe estar y de nos manda esa data aqui)
//   ////no descomentar esto esto le partenece al componente de arriba
//   // // tip para comletar rapido esto
//   // // escirbir uses y saldran opciones 
//   // //elegir  usestatesnippet y saldra todo esto
//   // //tasks es un array vacio al cargar la app que tendra toda la data de task.js q le pásara el useeffect
//   //// [] esto significa que solo se mostrara 1 vez q se renderize
//   //   const [tasks, setTasks] = useState([])

//   //   //una vez cargado el componente o funcion TaskList() 
//   //   //usaremos el setTasks para modificar y agregar toda la data del task.js en la variable tasks
//   //   useEffect ( ()=>{
//   //       setTasks(data)
//   //   }, [])
  
  
  
  
  
  
  
  
  
//   if(tasks.length === 0){
  
//     return <h1>no hay nada</h1>
  
  
//   }
  
//   //recordar q todo componente tiene su parte logica que es arriba del return y su parte que mostrara o renderizara que es el div
  
//     return (
  
//       //esto se ejectara despues q el useefect le pasa toda la data al array vacio tasks
//       //con este map : creara otro array no escribe en el mismo recordar q para eso sirve el map
//       //hara un recorrido y mostrara fila * fila del array
//       //recordar que  tasks.map( (task) => ( el tasks data se almacena en el task
//       //ademas recordar por cada elemento debe tener un key unico en la etiqueta raiz en este caso le pondremos al div q contiene todo  La etiqueta raíz de cada componente debe tener una extensión key. No tiene que ser único.

      
//       <div>
  
//         { tasks.map( (task) => (
     

//      // la parte de aqui de este list estamos separando los componentes en el taskCard esta esa parte
//      //esto se ejecuta al principio el listado 
//      //y tambien cuando se crea 1 objeto en la lista
//      // key={task.id} : el key lo envia igual pero sera oculto o hidden , ademas sera para cuando cremos objetos
//      //key={task.id} : obtiene solo el id
//      //task={task} : obtiene todo el objeto task
//               <TaskCard key={task.id} task={task}  deleteTask={deleteTask} />

//           )) }
  
//       </div>
//     );
//   }
  
  

















































// ====================================================================================================
  //EJEMPLO ELIMINAR USANDO EL CONTEXTO  EN EL TASKLIST
  //osea luego de mostrar el listado el usuario podra eliminar cualquier objeto de ese listado




  
//recordar que tasks son el nombre de las varibble q almacenan el valor en el App.jsx obviamente es el props especifico
export default function TaskList() {






  //con esto tenemos acceso los metodos del Taskcontext
    //ademas recordar q con esto este componente le pide al taskcontext 
  //recordar a traves de la variable value q esta en el taskcontext 
  //solo queremos mostrar q es el task y la funcion para eliminar el deletetask
  //otro concepto: El contexto que ha creado previamente con createContext. El contexto en sí no contiene la información, solo representa el tipo de información que puede proporcionar o leer de los componentes.
    const { tasks } = useContext(TaskContext);



    










  ////esto lo pondremos en el mismo App.jsx(por qu ahi debe estar y de nos manda esa data aqui)
  ////no descomentar esto esto le partenece al componente de arriba
  // // tip para comletar rapido esto
  // // escirbir uses y saldran opciones 
  // //elegir  usestatesnippet y saldra todo esto
  // //tasks es un array vacio al cargar la app que tendra toda la data de task.js q le pásara el useeffect
  //// [] esto significa que solo se mostrara 1 vez q se renderize
  //   const [tasks, setTasks] = useState([])

  //   //una vez cargado el componente o funcion TaskList() 
  //   //usaremos el setTasks para modificar y agregar toda la data del task.js en la variable tasks
  //   useEffect ( ()=>{
  //       setTasks(data)
  //   }, [])
  
  
  
  
  


  
  
  
  
  if(tasks.length === 0){
  
    return <div className=' bg-slate-800 mt-28 rounded h-24 w-80 mx-auto flex justify-center items-center'> 
       <h1 className='text-white text-3xl text-center font-mono font-semibold   '>
    No existen Animes</h1> </div> 
  
  

  }




  
  //recordar q todo componente tiene su parte logica que es arriba del return y su parte que mostrara o renderizara que es el div
  
    return (
  
      //esto se ejectara despues q el useefect le pasa toda la data al array vacio tasks
      //con este map : creara otro array no escribe en el mismo recordar q para eso sirve el map
      //hara un recorrido y mostrara fila * fila del array
      //recordar que  tasks.map( (task) => ( el tasks data se almacena en el task
      //ademas recordar por cada elemento debe tener un key unico en la etiqueta raiz en este caso le pondremos al div q contiene todo  La etiqueta raíz de cada componente debe tener una extensión key. No tiene que ser único.

      
      //usando tailwind 
      //recordar q hay autocompletoad(control +espacio ) ayuda
      //grid grid-cols-4 : es como una grilla sale 4 columnas , osea solo admite por 4 columnas por fila
      //gap-2 : espacio entre columnas

      <div className='grid grid-cols-4 gap-4'>
  
        { tasks.map( (task) => (
     

     //deleteTask= son las variables y eso se envia 
     //{deleteTask} : es el valor enviado dentro de las variables
     // la parte de aqui de este list estamos separando los componentes en el taskCard esta esa parte
     //esto se ejecuta al principio el listado 
     //y tambien cuando se crea 1 objeto en la lista
     //task= : es el nombre de la variable
     // key={task.id} : el key lo envia igual pero sera oculto o hidden , ademas sera para cuando cremos objetos
     //key={task.id} : obtiene solo el id
     //task={task} : obtiene todo el objeto task
              // <TaskCard key={task.id} task={task}  deleteTask={deleteTask} />


              //usando el contexto  en este caso el deleteTask sera obtenido ahi mismo en ese componete se lo pedira al taskcontext
              <TaskCard key={task.id} task={task}  />

          )) }
  
      </div>
    );
  }
  
  
