//al hacer clic llama la función que corre el asignador de elementos 
const btnSigno = document.getElementById('botonSigno');
btnSigno.addEventListener('click',signoChino);



 const añoSaved = localStorage.getItem('añoGuardado');
 

// al hacer focus  en el input se rellena con el valor guardado en el local storage 
 
const focusañoNacimiento = document.getElementById('enterSigno');
focusañoNacimiento.addEventListener('focusin', yearSaved); 

function yearSaved() {   
    document.getElementById('enterSigno').value = añoSaved;
}


const btnUp = document.getElementById('botonUp');
btnUp.addEventListener('click',invisibleCard);



