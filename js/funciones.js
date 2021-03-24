 export function showAlert(message, type){
    const alert = document.querySelector('.alert');
     if (!alert){
        const divMS = document.createElement('div');
        divMS.classList.add('px-4','py-3','rounded','max-w-lg','mt-6','text-center','border','alert');

        if(type === 'error'){
            divMS.classList.add('bg-red-100','border-red-400','text-red-700');
        }else{
            divMS.classList.add('bg-green-100','border-green-400','text-green-700');
        }
        divMS.textContent = message;
        const formulario = document.querySelector('#formulario');
        formulario.appendChild(divMS);
        setTimeout(()=>{
            divMS.remove();
        }, 3000)
     }   
}

export function check(obj){
    return !Object.values(obj).every( input => input !== '');
 }