import {getCliente, actualizarCliente} from './API.js';
import {showAlert, check} from './funciones.js'


(function(){
    document.addEventListener('DOMContentLoaded', async ()=>{
        const parametreUrl = new URLSearchParams(window.location.search);
        const idCliente = parseInt(parametreUrl.get('id'));
        const client =  await getCliente(idCliente);
        const form = document.querySelector('#formulario');
        form.addEventListener('submit', updateCliente);

       showCliente(client);
    })
 function showCliente(client){

    const {nombre, email, telefono, empresa, id} = client;

        const nombreInput = document.querySelector('#nombre').value = nombre;
         const emailInput = document.querySelector('#email').value = email;
         const telefonoInput = document.querySelector('#telefono').value = telefono;
         const empresaInput = document.querySelector('#empresa').value = empresa;
         const idInput = document.querySelector('#id').value = id;

 }

 function updateCliente(e){
     e.preventDefault()
         const nombre = document.querySelector('#nombre').value;
         const email = document.querySelector('#email').value ;
         const telefono = document.querySelector('#telefono').value ;
         const empresa = document.querySelector('#empresa').value ;
         const id = parseInt(document.querySelector('#id').value) ;

         const client = {
             nombre,
             email,
             telefono,
             empresa,
             id
         }
        if (check(client)){
            showAlert('todos lo campo son obligatorio','error');
            return;
        }
        else{
            showAlert('Registro actualizado');
            setTimeout(() => {
                actualizarCliente(client);
            }, 2000);
           
        }
         
    

           
        
        
 }



})();