

// COMPONENTE POR DEFECTO DE VITE.JS solo lo hemos comentado
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div className="App">
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://reactjs.org" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </div>
//   )
// }









// EJEMPLO ESCRIBIENDO CODIGO MAS RAPIDO(descom,entar la funcion)
// function App(){
//   return (  
  
  
  

// ======================================================================================================
//   // ESCRIBIENDO CODIGO MAS RAPIDO
//   <h1>

//  {/* este es una nueva de forma de escribir codigo , es mucho mas rapidas
//  explicacion.
//  en este ejemplo creamos un ul dentro de eso creamos listas li 3 y dentro cada lista un texto 
//  ul>li*3>a{hol jesus} */}


//     <ul>
//       <li><a href="">enlace 1</a></li>
//       <li><a href="">enlace 2</a></li>
//       <li><a href="">enlace 3</a></li>
//       <li><a href="">enlace 4</a></li>
//     </ul>
//   </h1>);
// }

// export default App









// ======================================================================================================
//CREANDO COMPONENTES   + RAPIDO
// ES7 +REACT / REDUX/REACT-NATIVE SNIPPETS : descargar esta extension
// escribir rfc
//automaticamente le dara el nombre del archivo a tu componente
// se selecciona automaticamente el nombre del componente para poder modificarlos 
//ademas lo exporta de forma nombrada(varios)

// + 

//CODIGO IMPORTAR
// ADEMAS : puedes importar mucho mas rapido 
// en tu codigo escribe imp  ( de esa forma importaras + rapido) 
// imp : basicamente es para autocompletar cuando importar


//CODIGO CONSOLA
//clg : autocompleta para poner en la consola









// ======================================================================================================
//APLICACION CON FAZT
//crear una lista de tareas que vendra de 1 archivo json
// desde este componente llamaremos al componente tasksList.js
//RECORDAR QUE AL USAR VITE.JS ES nesecario poner el jsx como extension







// COMPONENTE PADRE






///componentes hijos
import TaskList from './components/TaskList'

import TaskForm from './components/TaskForm'










//2 EJEMPLO

//importando la data osea como una api de tasks.js
//y le pondremos un alias pa evitar conflictos con otras variables
// import {tasks as data} from './tasks'
import {tasks as data} from './data/tasks'


import {useState, useEffect} from 'react'


















// ==========================================================================================================
//1 EJEMPLO
//DESCOMENTAR TODO esto
// export default function App() {
  


//   // 2 EJEMPLO LO USAMOS EN TaskList.jsx 
//   //MOSTRANDO LA DATA DEL tasks.js  
//   //esta constante es global                                                             
//       const [tasks, setTasks] = useState([])



//       //PARA MOSTRAR LA DATA DEL ARRAY tasks.js abajo del form osea en el form taslist.jsx
//     //una vez cargado el componente o funcion App() osea sobre todo el return osea mostrar los componentes
//     //usaremos el setTasks para modificar y agregar toda la data del task.js en la variable tasks
//     //[] solo hara 1 cambio en toda tu app App()
//     useEffect ( ()=>{
//         setTasks(data)
//     }, [])
  
  





//     //  FUNCION AGREGA DATA  o CREA UN OBEJTO EN EL ARRAY DEL AL tasks.js mediante el form
//     //explicacion
//     //ete ejemplo tambien es del form pero pero el id se repite
//     //[...tasks,task]   : ...tasks(trae todo el array de data o tasks.js)  y ,task : le agrega el nuevo objeto (es el paramretro de la funcion)
//     //cuando agregamos llamara useeffect para que renderize otra vez y muestre el TaskList.jsx
//     // function createTask(task){
//     //   setTasks([...tasks,task])
//     // }








//     //  FUNCION AGREGA DATA o CREA UN OBEJTO EN EL ARRAY DEL tasks.js mediante el form
//     //(taskTitle): es el parametro enviado desde el taskform osea el title string y descripction solo eso
//     //aca ya crearemos el objeto , recordar poner escribir igual los atributos del objeto
//     //recordar q al cargar la pagina se elimina todo esto pq es como un map crear un nuevo arrar no lo sobrescribe
//     //recordar que 1 vez agregado llama al useEffect para q renderize otra vez
//     function createTask(taskTitle){
//       setTasks([...tasks,{
//     //creacion del objeto para agregarlo
//         title :taskTitle.title, //valor obtenido desde el taskform
//         //el id es creado solo cuando se crea 1 objeto
//         id:tasks.length,  // segun el index comienza desde 0 (el length comienza desde 1)
//         descripcion:taskTitle.descripcion//valor obtenido desde el taskform
//       }])
//     }




                    
    



  
                                 
                                      
  
//   return (

                                

//     //SALIDA DE COMPONENTE PADRE  junto con sus componetes hijos
//     //TENDRA EL FORM(ARRIBA es el TaskForm ) y abajo el componente TaskList
//     //<></> : etiqueta fragment o tambien puedes ponerle un div
//     <>


//         {/* 1 EJEMPLO */}

//         {/* 
//         <TaskForm/>
//       <TaskList  /> */}








//         {/* 2 EJEMPLO */}

//    {/* recordar q enviamos 1 funcion como props al ejecutar este funcion llama al metodo + arriba
//    aca se lla,an 2 veces la 1 q es para mostrar el form vacio y loa segunda para crear objeto ese form es enviado 
//    con data */}
//       <TaskForm  createTask={createTask} />

//       {/* tasks={tasks}  : este tasks.js(es el q va en llaves) se envia como props al componente
//       recordar que el tasks es la variable que tiene todo la data ya cargada*/}
//       <TaskList   tasks={tasks}  />
     



//     </>
//   )
// }





































//===================================================================================================
// EJEMPLO ELIMINAR 
//osea luego de mostrar el listado el usuario podra eliminar cualquier objeto de ese listado
//recordar que el Componente padre App() se encarga de los metodo principales como createtask y ahora tambien el eliminar 






//DESCOMENTAR TODO ESTO
// export default function App() {
  


//   // 2 EJEMPLO LO USAMOS EN TaskList.jsx 
//   //MOSTRANDO LA DATA DEL tasks.js  
//   //esta constante es global                                                             
//       const [tasks, setTasks] = useState([])



//       //PARA MOSTRAR LA DATA DEL ARRAY tasks.js abajo del form osea en el form taslist.jsx
//     //una vez cargado el componente o funcion App() osea sobre todo el return osea mostrar los componentes
//     //usaremos el setTasks para modificar y agregar , eliminar .etc toda la data del task.js en la variable tasks
//     //[] solo hara 1 cambio en toda tu app App()
//     useEffect ( ()=>{
//         setTasks(data)
//     }, [])
  
  





//     //  FUNCION AGREGA DATA  o CREA UN OBEJTO EN EL ARRAY DEL AL tasks.js mediante el form
//     //explicacion
//     //ete ejemplo tambien es del form pero pero el id se repite
//     //[...tasks,task]   : ...tasks(trae todo el array de data o tasks.js)  y ,task : le agrega el nuevo objeto (es el paramretro de la funcion)
//     //cuando agregamos llamara useeffect para que renderize otra vez y muestre el TaskList.jsx
//     // function createTask(task){
//     //   setTasks([...tasks,task])
//     // }








//     //  FUNCION AGREGA DATA o CREA UN OBEJTO EN EL ARRAY DEL tasks.js mediante el form
//     //(taskTitle): es el parametro enviado desde el taskform osea el title string y descripction solo eso
//     //aca ya crearemos el objeto , recordar poner escribir igual los atributos del objeto
//     //recordar q al cargar la pagina se elimina todo esto pq es como un map crear un nuevo arrar no lo sobrescribe
//     //recordar que 1 vez agregado llama al useEffect para q renderize otra vez
//     function createTask(taskTitle){
//       setTasks([...tasks,{
//     //creacion del objeto para agregarlo
//         title :taskTitle.title, //valor obtenido desde el taskform
//         //el id es creado solo cuando se crea 1 objeto
//         id:tasks.length,  // segun el index comienza desde 0 (el length comienza desde 1)
//         descripcion:taskTitle.descripcion//valor obtenido desde el taskform
//       }])
//     }





//     //FUNCION ELIMINAR un objeto del array del tasklist
//      //osea la logica estara aca osea el metodo pero se lo enviamos al componente tasklist y de ahi se lo envia al taskcard
//      //y el tarkcard devuleve la funcion con el id y aca lo elimnara
//     function deleteTask(tasId){   //recibe el id el objeto task seleccionado 

//       //imprime los tasks junto con su id
//       console.log(tasks)
//       console.log(tasId)



//    //llama a la funcion setTasks pa modificar todo el array con el filtre que lo escondera y solo mostrara los que cumplen ese 
//    //filtro


//      //             task.id(el id del array un recorrido)          tasId : el id del objeto seleccionadop del taskCard
//      //         si es diferente muestra , pero si es igual signfica que lo a encontrado lo escondera o eliminara pq no cumple 
//      //el filtro
//        setTasks( tasks.filter(task => task.id !== tasId));

//     }





                    
    



  
                                 
                                      
  
//   return (

                                

//     //SALIDA DE COMPONENTE PADRE  junto con sus componetes hijos
//     //TENDRA EL FORM(ARRIBA es el TaskForm ) y abajo el componente TaskList
//     //<></> : etiqueta fragment o tambien puedes ponerle un div
//     <>


//         {/* 1 EJEMPLO 
        
//         */}

//         {/* 
//         <TaskForm/>
//       <TaskList  /> */}










//    {/* recordar q enviamos 1 funcion como props al ejecutar este funcion llama al metodo + arriba
//    aca se llamasn 2 veces la 1 q es para mostrar el form vacio y la segunda para crear objeto ese form es enviado 
//    con data */}

// {/* createTask={createTask} : el createTask= es el nombre de la variable que contiene el valor {createTask} */}
//       <TaskForm  createTask={createTask} />






//       {/* tasks={tasks}  : este tasks.js(es el q va en llaves) se envia como props al componente
//       recordar que el tasks= es la variable que tiene todo la data ya cargada  
//       deletetask={deletetask} : ademas se le envia la funcion como props para eliminar osea el objeto de la fila
//       */}


// {/* tasks=  : nombre de la variable y puedes otro nombre no es obligatorio q sea igual pero si recomendable
// {tasks} : es el valor almacenado  */}
//       <TaskList   tasks={tasks}  deleteTask={deleteTask}  />
     



//     </>
//   )
// }





































//===================================================================================================
// 3 EJEMPLO USANDO EL CONTEXTO  
//osea la idea que casi todo la logica arriba del return aqui en este componente este en taskcontext como general 
// para q todo los hijos tengan acceso defrente ahi y no estar pasando de 1 componenta a otro como anteriormente
//aca le pasaremos solo el useState , useEffect , createTask, deleteTask. 
//recordar que cuando usamos el App que contenia todo osea la logica , los componentes hijos entraban de componente a componentes 
// hasta el App.jsx y es un poco engorroso por usamos el contexto que solamente debemos llamar al contexto no importan la distancia
// que este el componente hijo.





//DESCOMENTAR TODO ESTO
export default function App() {
  






  // 2 EJEMPLO LO USAMOS EN TaskList.jsx 
  //MOSTRANDO LA DATA DEL tasks.js  
  //esta constante es global                                                             
      // const [tasks, setTasks] = useState([])






    //   //PARA MOSTRAR LA DATA DEL ARRAY tasks.js abajo del form osea en el form taslist.jsx
    // //una vez cargado el componente o funcion App() osea sobre todo el return osea mostrar los componentes
    // //usaremos el setTasks para modificar y agregar , eliminar .etc toda la data del task.js en la variable tasks
    // //[] solo hara 1 cambio en toda tu app App()
    // useEffect ( ()=>{
    //     setTasks(data)
    // }, [])
  
  





    //  FUNCION AGREGA DATA  o CREA UN OBEJTO EN EL ARRAY DEL AL tasks.js mediante el form
    //explicacion
    //ete ejemplo tambien es del form pero pero el id se repite
    //[...tasks,task]   : ...tasks(trae todo el array de data o tasks.js)  y ,task : le agrega el nuevo objeto (es el paramretro de la funcion)
    //cuando agregamos llamara useeffect para que renderize otra vez y muestre el TaskList.jsx
    // function createTask(task){
    //   setTasks([...tasks,task])
    // }








    //  FUNCION AGREGA DATA o CREA UN OBEJTO EN EL ARRAY DEL tasks.js mediante el form
    //(taskTitle): es el parametro enviado desde el taskform osea el title string y descripction solo eso
    //aca ya crearemos el objeto , recordar poner escribir igual los atributos del objeto
    //recordar q al cargar la pagina se elimina todo esto pq es como un map crear un nuevo arrar no lo sobrescribe
    //recordar que 1 vez agregado llama al useEffect para q renderize otra vez
    // function createTask(taskTitle){
    //   setTasks([...tasks,{
    // //creacion del objeto para agregarlo
    //     title :taskTitle.title, //valor obtenido desde el taskform
    //     //el id es creado solo cuando se crea 1 objeto
    //     id:tasks.length,  // segun el index comienza desde 0 (el length comienza desde 1)
    //     descripcion:taskTitle.descripcion//valor obtenido desde el taskform
    //   }])
    // }





    //FUNCION ELIMINAR un objeto del array del tasklist
     //osea la logica estara aca osea el metodo pero se lo enviamos al componente tasklist y de ahi se lo envia al taskcard
     //y el tarkcard devuleve la funcion con el id y aca lo elimnara
  //   function deleteTask(tasId){   //recibe el id el objeto task seleccionado 

  //     //imprime los tasks junto con su id
  //     console.log(tasks)
  //     console.log(tasId)



  //  //llama a la funcion setTasks pa modificar todo el array con el filtre que lo escondera y solo mostrara los que cumplen ese 
  //  //filtro


  //    //             task.id(el id del array un recorrido)          tasId : el id del objeto seleccionadop del taskCard
  //    //         si es diferente muestra , pero si es igual signfica que lo a encontrado lo escondera o eliminara pq no cumple 
  //    //el filtro
  //      setTasks( tasks.filter(task => task.id !== tasId));

  //   }





                    
    



  
                                 
                                      
  
  return (

                                

    //SALIDA DE COMPONENTE PADRE  junto con sus componetes hijos
    //TENDRA EL FORM(ARRIBA es el TaskForm ) y abajo el componente TaskList
    //<></> : etiqueta fragment o tambien puedes ponerle un div
    <>


        {/* 1 EJEMPLO 
        
        */}

        {/* 
        <TaskForm/>
      <TaskList  /> */}













   {/*    TASKFORM 
   recordar q enviamos 1 funcion como props al ejecutar este funcion llama al metodo + arriba
   aca se llamasn 2 veces la 1 q es para mostrar el form vacio y la segunda para crear objeto ese form es enviado 
   con data */}

{/* createTask={createTask} : el createTask= es el nombre de la variable que contiene el valor {createTask} */}
      {/* <TaskForm  createTask={createTask} /> */}














      {/*    TASKLIST
       tasks={tasks}  : este tasks.js(es el q va en llaves) se envia como props al componente
      recordar que el tasks= es la variable que tiene todo la data ya cargada  
      deletetask={deletetask} : ademas se le envia la funcion como props para eliminar osea el   objeto de la fila
      */}


{/* tasks=  : nombre de la variable y puedes otro nombre no es obligatorio q sea igual pero si recomendable
{tasks} : es el valor almacenado  */}
      {/* <TaskList   tasks={tasks}  deleteTask={deleteTask}  /> */}
     













     {/*USANDO  TASKCONTEXT  */}
   {/* usamos el main para modficar los estilos con tallwing para que este dentro de 1 contenedor puede ser tambien un div 
     bg-zinc-900 : es el background
     h-screen : es el height 100% alto pantalla
     container: este haze que tamaño del width cambie segun los tamaños md,sm ect
     mx-auto: centra en el eje de las x
     p-10: padding

     IMAGEN DE FONDO CON TAILWIND(CONFIGURAR)
     bg-pack-train  : es un imagen de fondo con url debes configura en tailwind.config.js
     bg-cover :escalar la imagen de fondo hasta que llene la capa de fondo.


     */}

     <main className='bg-pack-train bg-cover h-screen'>



      <div className='container mx-auto p-10  '>

      <TaskForm/>

      <TaskList/>
      </div>



     </main>



    </>
  )
}






