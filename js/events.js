const btnSigno = document.getElementById('botonSigno');
btnSigno.addEventListener('click',signoChino);

const añoSaved = localStorage.getItem('añoGuardado');
  
const focusañoNacimiento = document.getElementById('enterSigno');
focusañoNacimiento.addEventListener('focusin', yearSaved); 

function yearSaved() {   
    document.getElementById('enterSigno').value = añoSaved;
}

const btnUp = document.getElementById('botonUp');
btnUp.addEventListener('click',invisibleCard);