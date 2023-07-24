





//==================================================================================================
//2 PARTE   
//Añadiendo tareas desde el formulario
//añadiendo tareas dentro de la lista de tareas
//para eso nescitamos un procion de interfaz

//osea luego de lista lo de arriba queremos ahi mismo en la pagina agregar tareas o el usuario pueda agregar tareas
//recordar con el rfc es para crear componentes osea autocompleta el codigo




import React from 'react'

import {useState} from 'react'










//==================================================================================================
//5 EJEMPLO
//USANDO EL CONTEXTO osea esre hijo componente tendra acceso al taskcontext


import {useContext} from 'react'//1  osea para usar el contexto 
import {TaskContext} from '../context/TaskContext'//2  obtiene acceso al contexto osea a su data


















//COMPONENTE SECUNDARIO 
//este componente es el de arriba del tasklist , con esta se utilizan los inputs






// //1 EJEMPLO SIN UNIR AL TASKLIST.JSX  (DESCOMENTAR TODO)

// //TIP IMPORTANTE: en la extension react developer tools puedes ver todo q hazen los componentes x ejemplo title luego de escribir
// export default function TaskForm() {


//     //tipo string es la variable title
//     const [title, setTitle] = useState("");





//     //funcion se ejecuta cuando el form se envia 
//     const handleSubmit=(e)=>{

//         //esta funcion lo q pasa es q cuando un formulario se envia se actuliza por ende borra la consola
//         //con esto hacemos q el form se envie pero no se actualize
//         e.preventDefault();
        
//         console.log(title);
//     }





    
//   return (
//     //onsubmit :Llame a una función cuando se envía un formulario o El evento onsubmit ocurre cuando se envía un formulario.
//     //todo componente tiene un div padre q envuelve en este caso no es nesecario pq lleva el form 
//     <form action=""  onSubmit={handleSubmit}>

        
//         <input type="text" placeholder='escribe tu carte'
//         onChange={ (e)=> setTitle(e.target.value)  } />
//         <button> guardar</button>
    
//     </form>
   
//   );
// }





























//2 EJEMPLO UNIENDO AL TASKLIST.JSX(DESCOMENTAR TODO)


//TIP IMPORTANTE: en la extension react developer tools puedes ver todo q hazen los componentes x ejemplo title luego de escribir
//RECORDAR : {createTask} es un prop pero es una funcion px eso cuando se ejecuta se devulve la data de este form al  al App.jsx principal osea 
//ademas antes de ejecutar esa funcion que es un prop primero , mostrara el form osea los inputs luego de pulsar o enviar el form
//se ejecutara esa funcion del props
// para q se ejecuta esa funcion




//DESCOMENTAR TODO ESTO
// export default function TaskForm({createTask}) {


//   //tipo string es la variable title
//   const [title, setTitle] = useState("");







  

//   //FUNCION AL EJECUTAR EL FORM
//   //funcion se ejecuta cuando el form se envia 
//   const handleSubmit=(e)=>{

//       //esta funcion lo q pasa es q cuando un formulario se envia se actuliza por ende borra la consola
//       //con esto hacemos q el form se envie pero no se actualize y no borre la consola
//       e.preventDefault();







      
//       //GUARDANDO LA DATA EN UN OBJETO PARA CREAR UN tasks.js
//       //cuando se ejecuta esta funcion title(variable ya cargado con su data) lo almacenamos aqui en una constrante objeto
//       //pq nosotros crearemos un objeto para tasks.js por eso lo guardamos en 1 objeto
//       //esto generara error pq se repitira el id 
//       // const newTask={
//       //   title ,
//       //   id:4,
//       //   descripcion:"new some"
//       // }




//       //CREANDO UN OBJETO PERO ES LO MISMO DE ARRIBA PERO SIN ERROR SOLO EL KEY debe ser unico
//       //para q el id no se repita nesecitamos acceso al tasks.js en ese caso tendremos q ir al App.jsx
//       //osea aca solo le enviamos la variable string title
//       createTask(title);





     
 

//   }






// return (
//   //onsubmit :Llame a una función cuando se envía un formulario o El evento onsubmit ocurre cuando se envía un formulario.
//   //target es la etiqueta o tag q comienza todo en este caso el input
//   //todo componente tiene un div padre q envuelve en este caso no es nesecario pq lleva el form 
//   <form action=""  onSubmit={handleSubmit}>

      
//       <input type="text" placeholder='escribe tu carte'
//       onChange={ (e)=> setTitle(e.target.value)  } />




//       <button> guardar</button>
  
//   </form>
 
// );
// }
























// ==================================================================================
//4 EJEMPLO CON SEPARACION DE COMPONENTES 
//separa componentes significa que los subcomponentes como taskfomr y el tarsklist se pueden dividir en otros componentes



//recordar {createTask}) es 1 funcion , osea este componente TaskForm primero se ejecuta para mostrar el form luego, se ejecutara para enviar la data del form a traves de la funcion {createTask}

//DESCOMENTAR TODO ESTO
// export default function TaskForm({createTask}) {


//   //tipo string es la variable title
//   const [title, setTitle] = useState("");



//   const [descripcion, setDescripcion] = useState("");




  

//   //FUNCION AL EJECUTAR EL FORM
//   //funcion se ejecuta cuando el form se envia 
//   const handleSubmit=(e)=>{

//       //esta funcion lo q pasa es q cuando un formulario se envia se actuliza por ende borra la consola
//       //con esto hacemos q el form se envie pero no se actualize y no borre la consola
//       e.preventDefault();



//       console.log(title,descripcion);



      
//       //GUARDANDO LA DATA EN UN OBJETO PARA CREAR UN tasks.js
//       //cuando se ejecuta esta funcion title(variable ya cargado con su data) lo almacenamos aqui en una constrante objeto
//       //pq nosotros crearemos un objeto para tasks.js por eso lo guardamos en 1 objeto
//       //esto generara error pq se repitira el id 
//       // const newTask={
//       //   title ,
//       //   id:4,
//       //   descripcion:"new some"
//       // }




//       //CREANDO UN OBJETO PERO ES LO MISMO DE ARRIBA PERO SIN ERROR SOLO EL KEY debe ser unico
//       //para q el id no se repita nesecitamos acceso al tasks.js en ese caso tendremos q ir al App.jsx
//       //osea aca solo le enviamos la variable string title y la descripcion
//       //lo envias como llaves por que es un objeto
//       createTask({
//         title,
//         descripcion
//       });




//       //una vez ejecutado el form se limpie las variables 
//       setTitle('')
//       setDescripcion('')


     
 

//   };



//   //recordar q todo componente tiene su parte logica que es arriba del return y su parte que mostrara o renderizara que es el div


// return (
//   //onsubmit :Llame a una función cuando se envía un formulario o El evento onsubmit ocurre cuando se envía un formulario.
//   //target es la etiqueta o tag q comienza todo en este caso el input
//   //todo componente tiene un div padre q envuelve en este caso no es nesecario pq lleva el form 
//   //value={title} : el valor se pone vacio al enviar el form , osea el la varible de use state tiene un valor eso saldra en el input , osea al enviar se borrar los inputs 
//   <form action=""  onSubmit={handleSubmit}>

//       {/* ESTO ES EL TITLE  */}
//       <input type="text" placeholder='escribe tu carte'
//       onChange={ (e)=> setTitle(e.target.value)  }  value={title} autoFocus/>
//       {/* ESTO ES PARA LA DESCRIPCION  */}
//       <textarea placeholder='escribe la descripcion' name="" id="" cols="30" rows="10" value={descripcion}
//       onChange={(e) => setDescripcion(e.target.value)}
//       ></textarea>



//       <button> guardar</button>
  
//   </form>
 
// );
// }












































// ==================================================================================
//5 EJEMPLO CON SEPARACION DE COMPONENTES y USANDO EL CONTEXTO
//separa componentes significa que los subcomponentes como taskfomr y el tarsklist se pueden dividir en otros componentes



//recordar {createTask}) es 1 funcion , osea este componente TaskForm primero se ejecuta para mostrar el form luego, se ejecutara para enviar la data del form a traves de la funcion {createTask}
//pero ahora usando contexto no es nesecario

// DESCOMENTAR TODO ESTO
export default function TaskForm() {







  //tipo string es la variable title
  const [title, setTitle] = useState("");



  const [descripcion, setDescripcion] = useState("");












  //USANDO EL TASKCONTEXT OBTENIENDO ACCESO
  //ademas recordar q con esto este componente le pide al taskcontext 
  //de esta forma este form  tendra acceso al TaskContext a su data
  //reocmendable es que solo se haga esto 1 vez y solo en 1 componente
  // const value= useContext(TaskContext) //esto obtiene todo el value osea como un 1 objeto del taskcontex
  //  console.log(value)

  //osa con con esto tiene accese para obtener y tambien para enviar , en este caso es una funcion por ende , enivara la data
//ahora de todo ese objeto solo queremnos el { create task }osea mas especifico pq este componente crea
//esto se refiere al value(variable que esta en el tascontext.jsx)
  const {createTask}= useContext(TaskContext)










  




  //FUNCION AL EJECUTAR EL FORM
  //funcion se ejecuta cuando el form se envia 
  const handleSubmit=(e)=>{

      //esta funcion lo q pasa es q cuando un formulario se envia se actuliza por ende borra la consola
      //con esto hacemos q el form se envie pero no se actualize y no borre la consola
      e.preventDefault();



      console.log(title,descripcion);



      
      //GUARDANDO LA DATA EN UN OBJETO PARA CREAR UN tasks.js
      //cuando se ejecuta esta funcion title(variable ya cargado con su data) lo almacenamos aqui en una constrante objeto
      //pq nosotros crearemos un objeto para tasks.js por eso lo guardamos en 1 objeto
      //esto generara error pq se repitira el id 
      // const newTask={
      //   title ,
      //   id:4,
      //   descripcion:"new some"
      // }




      //CREANDO UN OBJETO PERO ES LO MISMO DE ARRIBA PERO SIN ERROR SOLO EL KEY debe ser unico
      //para q el id no se repita nesecitamos acceso al tasks.js en ese caso tendremos q ir al App.jsx
      //osea aca solo le enviamos la variable string title y la descripcion
      //lo envias como llaves por que es un objeto
      createTask({
        title,
        descripcion
      });




      //una vez ejecutado el form se limpie las variables 
      setTitle('')
      setDescripcion('')


     
 

  };










  //recordar q todo componente tiene su parte logica que es arriba del return y su parte que mostrara o renderizara que es el div


return (
  //onsubmit :Llame a una función cuando se envía un formulario o El evento onsubmit ocurre cuando se envía un formulario.
  //target es la etiqueta o tag q comienza todo en este caso el input
  //todo componente tiene un div padre q envuelve en este caso no es nesecario pq lleva el form 
  //value={title} : el valor se pone vacio al enviar el form , osea el la varible de use state tiene un valor eso saldra en el input , osea al enviar se borrar los inputs 
  //esto se ejcuta 2 veces , la 1 cuando se carga todo junto con el onSubmit pero vacio y la segunda cuando creas un objeto

  //agregando estilos con tailwind : (ayuda dar click sobre el atributo para saber q hcae )
  //p-10 : es el padding a todo
  //mb-4 : margin buttom
  //max-w-md : dar un tamaño maximo al width
  //mx-auto : lo centra em epl eje de las x
//w-full  : ocupa el 100% en width
//px o py : mismo tamaño de padding en el eje de x o y
//text-slate-950 : colo de la letra
//text-2xl : es el tamaño de la fuente
//rounded: es el border
//outline-0 : sacar las lines del input
//hover:bg-lime-700 : usando hoover dentro de las clases con tailwind si se puede

  <div className='max-w-md mx-auto '>
      <form action=""  onSubmit={handleSubmit}  className='bg-slate-800 p-10 mb-4 rounded-2xl'>
        <h1 className='text-4xl font-semibold text-white mb-3 text-center font-mono tracking-wide'> Creador de Animes</h1>

{/* ESTO ES EL TITLE  */}
<input type="text" placeholder='nombre del anime'
className='bg-slate-600 w-full p-3 mb-2 rounded text-white outline-0'
onChange={ (e)=> setTitle(e.target.value)  }  value={title} autoFocus/>
{/* ESTO ES PARA LA DESCRIPCION  */}
<textarea placeholder='descripcion del anime' name="" id="" cols="20" rows="1" value={descripcion}
className='bg-slate-600 w-full p-3 mb-2 rounded text-white outline-0'
onChange={(e) => setDescripcion(e.target.value)}
></textarea>

 {/* cuando usamos flex casi siempre poner dentro de las cajas padres y afectara a sus hijos  para centrar */}
<div className='flex justify-center'> 

{/* la idea siempre en estilos es que este dentro de un contendor para centrar sobre todo los botones 
usamos el padding para aumentar el width tambien sirve */}
<button className='bg-lime-500 px-16 py-2 text-slate-950  hover:bg-lime-700 font-bold  rounded '> Guardar</button>
<h1>s</h1>
</div>


   </form>
  </div>
 
);
}

