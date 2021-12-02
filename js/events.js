$('#botonSigno').click(signoChino);
$('#botonSigno').click(crearMovieCards);
  
$('#enterSigno').focus(yearSaved);

function yearSaved() {   
    $('#enterSigno').val(localStorage.getItem('añoGuardado'));
}

$('#botonUp').click(invisibleCard);