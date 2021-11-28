function crearMovieCards() {
$("#contenedorGeneral").append('<div class="CardMovies bg-dark" id="cardMovies">');
$("#cardMovies").append('<p class="lead">Te recomendamos las siguientes películas:</p>');
$("#cardMovies").append('<div class="movies">');

for(let i=1;i<4;i++)  
$('.movies').append(`<div class="card bg-dark moviesCard">
<img src="Moviepics/Koyaanisqatsi.jpg" class="movieCard" id="MovieCard${i}">
<h1 id="moviesCardTitle${i}"><b>Movie Title ${i}</b></h1>
<ul>
<li id="moviesCardGenre">Drama</li>
<li id="moviesCardYear">2001</li>
</ul>
</div>`

);


}

