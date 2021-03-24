const url = 'http://localhost:4000/clientes';

export const nuevoCliente = async cliente =>{
        
    try {
       await  fetch(url, {
            method: 'POST',
            body: JSON.stringify(cliente),
            headers: {
                'content-Type': 'application/json'
            }
        })
        window.location.href= 'index.html';
        } catch (error) {
        console.log(error);
    }
}

export const obtenerCliente = async ()=>{
    try {
        const resultado = await fetch(url);
        const clientes = await resultado.json();
        return clientes;        
    } catch (error) {
        console.log(error);
    }   
}
//eliminar cliente
export const eliminarCliente = async id =>{

    try {
         await fetch(`${url}/${id}`,{
            method: 'DELETE'
        })
    } catch (error) {
        console.log('error');
    }
}
//obtener cliente

export const getCliente = async id =>{
    try {
        const respuesta = await fetch(`${url}/${id}`);
        const resultado = await respuesta.json();
        return resultado;
    } catch (error) {
        console.log(error);
    }

}
//actualizar registro

export const actualizarCliente = async client  =>{
    try {
        await fetch(`${url}/${client.id}`,{
            method:'PUT',
            body: JSON.stringify(client),
            headers:{
                'Content-Type': 'Application/json'
            }
        });
        window.location.href='index.html';
    } catch (error) {
        console.log(error);
    }

} 