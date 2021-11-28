const btnSigno = document.getElementById('botonSigno');
btnSigno.addEventListener('click',signoChino);
btnSigno.addEventListener('click',crearMovieCards);

const añoSaved = localStorage.getItem('añoGuardado');
  
const focusañoNacimiento = document.getElementById('enterSigno');
focusañoNacimiento.addEventListener('focusin', yearSaved); 

function yearSaved() {   
    document.getElementById('enterSigno').value = añoSaved;
}

const btnUp = document.getElementById('botonUp');
btnUp.addEventListener('click',invisibleCard);