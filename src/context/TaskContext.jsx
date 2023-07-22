

import React from 'react'






//funcion para usar el context en react
import {createContext} from 'react'



//importando el usestate para cambiar el estado y mostrar la lista de tares
import {useState , useEffect} from 'react'




// importando los tasks.js
import {tasks as data} from '../data/tasks'






//ESTO SOLO ES UN EJEMPLO NO EJECUTAR
// export default function TaskContext(props) {
//   return (
//   <>


// {/* La prop children es una prop especial que se pasa a los componentes. Es un objeto que contiene los elementos que envuelve un componente. osea todo la informacion del componente hijo todo       {props.children} */}
//      <h1>componente context</h1>



//      {props.children}


//   </>
//   )
// }






// TASKCONTEXT  -CONCEPTO

// Pasar datos profundamente con contexto
// Por lo general, pasará información de un componente principal a un componente secundario a través de accesorios. Pero pasar accesorios puede volverse detallado e inconveniente si tiene que pasarlos a través de muchos componentes en el medio, o si muchos componentes en su aplicación necesitan la misma información. El contexto permite que el componente principal haga que cierta información esté disponible para cualquier componente en el árbol debajo de él, sin importar cuán profundo sea, sin pasarlo explícitamente a través de accesorios.


//TASKCONTEXTO : esto servira para ser el contenedor de todos tus componentes como un padre 
//osea toda operacion que quiera hacer el cualquier componente dentro de este taskcontext tendra que pedirle a ese
// componente taskcontext  , con esto nos olvidamos si un componente esta dentro de otro como lo veniamos haciendo antes de usar 
//textContext con el App.jsx

// otra definicion
//ademas no solo eso por ejemplo en este proyecto tenemos el componente App que contiene todo los demas componentes. Pero si 
//creamos otro componente fuera del App pero debe estar dentro den text context podra igual acceder y tener acceso al taskCOntext
// Por lo general, pasará información de un componente principal a un componente secundario a través de accesorios. Pero pasar accesorios puede volverse detallado e inconveniente si tiene que pasarlos a través de muchos componentes en el medio, o si muchos componentes en su aplicación necesitan la misma información. El contexto permite que el componente principal haga que cierta información esté disponible para cualquier componente en el árbol debajo de él, sin importar cuán profundo sea, sin pasarlo explícitamente a través de accesorios.

// El contexto permite que un componente principal proporcione datos a todo el árbol debajo de él. Hay muchos usos para el contexto. Aquí hay un ejemplo. Considere este Headingcomponente que acepta un levelpara su tamaño:





























//ALMACEN DE DATA DE TODOS LOS COMPONENTES HIJOS DEL TASKCONTEXT
//ose en esta variable se almacena toda la logica de este componente TaskContext.jsx y otros compontentes hijos
//ademas este esta constane tambien almacena la data de este componente metodo , variables arrriba del return 
// useContextes un gancho. Al igual que useStatey useReducer, solo puede llamar a un Hook inmediatamente dentro de un componente React (no dentro de bucles o condiciones)..
//algo asi como el nombre del contexto
//osea esto almacena los datos de todos los componentes y tambien de este mismo componente que es el taskContext
export const TaskContext = createContext();

  




//MOSTRANDO Y RENDERIZANDO EL COMPONENTE(osea esto renderiza )
//y esto es el componentes que engloba al resto de componentes
//algo asi como el verdadero nombre pero de la etiqueta
//ademas renderizara un componente de jsx que sera en  el main
 export function TaskContextProvider(props) {


  //esta variable sera mostrada para todo los componentes hijos que esten dentro del TaskContext.Provider
   // let x =20;









   // EXPLICACION DE ESTE COMPONENTE CONTEXTO (OJO LEER)
   //osea la logica de todos los metodos que tenia el app.jsx el componente principal , ahora lo tendra este componente 
   //taskcontext.jsx de tal forma que anterirmente cuando usbamos el app , teniamos que pasarlo por de un componente a otro 
  //  comonente susecivamente la logica o metodos , pero ahora usando el contexto en este componente que contendra toda la logica 
  //  arriba del return , en los componentes hijos solo usar el contexto y llamar a la variable const de aqui y con eso obtinen la logica directa













  // 2 EJEMPLO LO USAMOS EN TaskList.jsx 
  //MOSTRANDO LA DATA DEL tasks.js  
  //esta constante es global        
   const [tasks, setTasks] = useState([]);










   

    //   //PARA MOSTRAR LA DATA DEL ARRAY tasks.js abajo del form osea en el  tasklist.jsx
    // //una vez cargado el componente o funcion TaskContextProvider() osea sobre todo el return osea mostrar los componentes
    // //usaremos el setTasks para modificar y agregar , eliminar .etc toda la data del task.js en la variable tasks
    // //[] solo hara 1 cambio en toda tu app App()
   useEffect ( ()=>{
    setTasks(data)
  }, [])












       //  FUNCION AGREGA DATA o CREA UN OBEJTO EN EL ARRAY DEL tasks.js mediante el form
       //...tasks : trae todo , {}   : agrega al array
    //(taskTitle): es el parametro enviado desde el taskform osea el title string y descripction solo eso
    //aca ya crearemos el objeto , recordar poner escribir igual los atributos del objeto
    //recordar q al cargar la pagina se elimina todo esto pq es como un map crear un nuevo array no lo sobrescribe
    //recordar que 1 vez agregado llama al useEffect para q renderize otra vez
    function createTask(taskTitle){
      setTasks([...tasks,{
    //creacion del objeto para agregarlo
        title :taskTitle.title, //valor obtenido desde el taskform
        //el id es creado solo cuando se crea 1 objeto
        id:tasks.length,  // segun el index comienza desde 0 (el length comienza desde 1)
        descripcion:taskTitle.descripcion//valor obtenido desde el taskform
        
      }])



    }













        //FUNCION ELIMINAR un objeto del array del tasklist
     //osea la logica estara aca osea el metodo pero se lo enviamos al componente tasklist y de ahi se lo envia al taskcard
     //recordar que cuando usamos el contexto no es nesecario enviarle
     //y el tarkcard devuleve la funcion, cunado se lo pide con el contexto con el id y aca lo elimnara
     function deleteTask(tasId){   //recibe el id el objeto task seleccionado 

      //imprime los tasks junto con su id
      console.log(tasks)
      console.log(tasId)



   //llama a la funcion setTasks pa modificar todo el array con el filtre que lo escondera y solo mostrara los que cumplen ese 
   //filtron , recodar q el filter hace un recorrido 


     //             task.id(el id del array un recorrido)          tasId : el id del objeto seleccionadop del taskCard
     //         si es diferente muestra , pero si es igual signfica que lo a encontrado lo escondera o eliminara pq no cumple 
     //el filtro
       setTasks( tasks.filter(task => task.id !== tasId));

    }





















    return (




//props children CONCEPTO:
//  para mostrar lo que incluye entre las etiquetas de apertura y cierre cuandoinvocandoun componente.
//osea el props childrene es basicamente lo que esta adentro del componentes en el mendio debajo de la etiqueta de apértura
//y arriba de la etiqueta de cierre . ccesorio especial para pasar elementos secundarios directamente a su salida:
//App.js  (EJEMPLO)
// render () { 
//   return ( 
//     <div className='container'> 
//       <Picture key={picture.id} src={picture.src}> 
//           //lo que se coloca aquí se pasa como props.children   
//       </Picture> 
//     </div > 
//   ) 
// }




//creamos el componente tal forma que todos los componentes hijos o que estan dentro del  {props.children}
//tendran acceso al TaskContextProvider que es componenente padre 
// osea el value es como un valor por defecto , usados cuando sus hijos se lo piden
//ademas se dice provider por que le da un estado al resto de componentes
//osea el vallue junta toda la data de este componentes y se lo envia a los hijos
//value={x} : tendra el valor de la variable x para todo  sus hijos componentes(osea toda la data de aca ennviamos a los hijos)
//son 2 llaves , pq primero es jsx y luego 1 objeto 
    <TaskContext.Provider value={{ 
      //enviando defrente el objeto
          tasks,  //la data del array task.js
        deleteTask,  //funcion eliminar 
         createTask ,  //funcion crear
    }}>
        {props.children}

    </TaskContext.Provider>

  )
}
