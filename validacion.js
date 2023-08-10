function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
    // SE PUEDE HACER UNA FUNCION SETTIMEOUT PARA REINICIAR EL FORMULARIO o PREVENT DEFAULT

}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

const boton = document.getElementById('regBtn');
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const email = document.getElementById('email');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');
const terminos = document.getElementById('terminos');

boton.addEventListener('click', function(){
     if (
         nombre.value !=='' && // UN STRING VACIO ES UN false, se puede OMITIR !=='' && 
         apellido.value !== '' && // .TRIM() SIRVE PARA QUE NO CUENTE ESPACIOS COMO CARACTER
         email.value !== '' &&
         password1.value !== '' &&
         password1.value === password2.value &&
         password1.value.length >= 6 &&
         terminos.checked 
     ) 
     { 
         showAlertSuccess();
     } else { 
         showAlertError(); }
 })

//  boton.addEventListener('click', (e) => {
//  e.preventDefault(); 
//     if ( nombre.value.trim() && apellido.value.trim() && email.value.trim() && password1.value.length >= 6 && 
//          password1.value === password2.value && terminos.checked ) 
//     { 
//         showAlertSuccess();
//     } else { 
//         showAlertError(); }
// })