import {obtenerCliente, eliminarCliente} from './API.js';

(function(){

    const listadoCliente = document.querySelector('#listado-clientes');
   
    document.addEventListener('DOMContentLoaded', mostraClientes);

    listadoCliente.addEventListener('click', deleteClient );

    async function mostraClientes(){
        const clientes = await  obtenerCliente();

       clientes.forEach(cliente => {
            const {nombre , email, telefono, empresa, id }= cliente;
            
            const row = document.createElement('tr');
            row.innerHTML += `
            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
            <p class="text-sm leading-5 font-medium text-gray-700 text-lg  font-bold"> ${nombre} </p>
            <p class="text-sm leading-10 text-gray-700"> ${email} </p>
            </td>
            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
                <p class="text-gray-700">${telefono}</p>
            </td>
            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">    
                <p class="text-gray-600">${empresa}</p>
            </td>
            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
                <a href="editar-cliente.html?id=${id}" class="text-teal-600 hover:text-teal-900 mr-5">Editar</a>
                <a href="#" data-cliente="${id}" class="text-red-600 hover:text-red-900 eliminar">Eliminar</a>
            </td>
            
            
            `;
            listadoCliente.appendChild(row)
       });

    }

    function deleteClient(e){
        if (e.target.classList.contains('eliminar')){
            const idCliente = parseInt(e.target.dataset.cliente); 
            const confirmar = confirm('Quieres eliminar el usuario');
            if (confirmar) {
            eliminarCliente(idCliente);
                
            }
            
        }
    }


})();