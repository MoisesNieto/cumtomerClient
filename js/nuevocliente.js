
import { showAlert, check} from './funciones.js';
import { nuevoCliente} from './API.js'


(function(){
     const formulario = document.querySelector('#formulario');

     formulario.addEventListener('submit', validarForm);

     function validarForm(e){
         e.preventDefault();

         const nombre = document.querySelector('#nombre').value;
         const email = document.querySelector('#email').value;
         const telefono = document.querySelector('#telefono').value;
         const empresa = document.querySelector('#empresa').value;
        
        const cliente = {
            nombre,
            email,
            telefono,
            empresa
        }

        if (check(cliente)){
            showAlert('todos lo campos son obligatorio','error');
            return;
        }

        nuevoCliente(cliente);
     }

     

     
    

})();