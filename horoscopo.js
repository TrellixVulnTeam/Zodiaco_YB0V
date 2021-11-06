let añoNacimiento = prompt('¿En que año naciste?');

let animalChino = ['Rata','Búfalo','Tigre','Conejo','Dragón','Serpiente','Caballo','Cabra','Mono','Gallo','Perro','Cerdo'];

let elementoChino = ['Metal','Agua','Madera','Fuego','Tierra'];

function asignarAnimal () {
    switch ((añoNacimiento - 4) % 12) { 

        case 0:
            animalChino = 'Rata';
            descripcionAnimal = 'La rata es buena para los negocios, popular en situaciones sociales y particularmente adaptable, independientemente de la situación. Las ratas son compatibles con el buey, el dragón y el conejo. También les va bien en años de rata, buey, dragón y conejo.';
            break;

        case 1 :
            animalChino = 'Búfalo';
            descripcionAnimal = 'El búfalo es sencillo y directo en interacciones con los demás. También son conservadores y trabajan duro. Son compatibles con la rata, la serpiente y el gallo. Les va bien en los años del búfalo, la rata, la serpiente y el gallo.';
            break;

        case 2:
            animalChino = 'Tigre';
            descripcionAnimal = 'Los nacidos en este año son seguros e independientes. También pueden ser un poco pedantes y ambiciosos. Son compatibles con el dragón, el caballo y el cerdo. Sus años felices son los años del tigre, el dragón, el caballo y el cerdo.';
            break;

        case 3 :
            animalChino = 'Conejo';
            descripcionAnimal = 'Los conejos son nobles y elegantes, y les encanta quedarse en casa y contar su dinero. Se llevan bien con cabras, monos, perros y cerdos jabalíes. Naturalmente, sus mejores años son los de la cabra, el perro, el conejo y el cerdo. Curiosamente, mientras que el conejo se lleva bien con los nacidos en el año de la cabra, el mono, el perro y el cerdo, los nacidos en el año del caballo y el mono también gravitan hacia el conejo.';
            break;

        case 4:
            animalChino = 'Dragón';
            descripcionAnimal = 'Ético, afortunado, intelectual, con tendencia a la soberbia, es el signo más deseado por los chinos. Los dragones son compatibles con gallo, rata y mono. Naturalmente, sus mejores años son los años del dragón, el gallo, la rata y el mono.';
            break;

        case 5 :
            animalChino = 'Serpiente';
            descripcionAnimal = 'Astutos más que sabios, les va particularmente bien como autores. Probablemente esto se deba a que tienen un profundo conocimiento de la naturaleza humana. Son compatibles con el dragón y el gallo, y les va bien en el año de la serpiente, el dragón y el gallo.';
            break;

        case 6:
            animalChino = 'Caballo';
            descripcionAnimal = 'Son populares, tienen mucha energía, tienen muchos amigos (naturalmente) y son tranquilos. Son los mejores amigos del tigre, la oveja y el conejo y, naturalmente, sus mejores años son los años del caballo, la cabra, el tigre y el conejo.';
            break;

        case 7 :
            animalChino = 'Cabra';
            descripcionAnimal = 'Los nacidos en este año son inteligentes y amables. Básicamente, son personas muy agradables y les va bien con el caballo, el conejo y el cerdo. Sus mejores años son el año de la cabra, caballo, conejo y cerdo.';
            break;

        case 8:
            animalChino = 'Mono';
            descripcionAnimal = 'Son rápidos y versátiles. También tienden a la honestidad y aman la riqueza. Gravitan hacia los nacidos en los años del búfalo y el conejo. Sus mejores años son los años del mono, el búfalo y el conejo.';
            break;

        case 9:
            animalChino = 'Gallo';
            descripcionAnimal = 'Conservador, puntual y leal, el gallo tiene valores muy tradicionales. También tienden a ser atractivos como personas y son amigos rápidos de los nacidos en el año del búfalo y la serpiente. Sus mejores años son los años del gallo, el búfalo y la serpiente.';
            break;

        case 10:
            animalChino = 'Perro';
            descripcionAnimal = 'Los perros son los mejores amigos del hombre porque aceptan todas nuestras faltas y permanecen leales a pesar de las dificultades y el pecado. Dicho esto, tienen una fuerte veta independiente y se llevan bien con los nacidos en el año del conejo. Florecen durante el año del perro y el año del conejo.';
            break;

        case 11 :
            animalChino = 'Cerdo';
            descripcionAnimal = 'Los nacidos bajo este animal se sienten naturalmente optimistas de que la vida les traerá cosas buenas. También son considerados con las necesidades de los demás. Sus mejores compañeros son el tigre, el conejo y la cabra. Estos también son sus mejores años.';
            break;       
            
        default:
            animalChino = 'Año no válido';
            break;
    }
}

function asignarElemento () {

    switch (añoNacimiento % 10) { 

        case 0:
        case 1:
            elementoChino = 'Metal';
            descripcionElemento = 'Si eres elemento metal, entonces eres muy fuerte y emocionalmente independiente de los demás. No necesitas muchas cosas a tu alrededor, pero tienes mucha ética y no solo tienes mucha confianza en ti mismo y respeto por ti mismo, sino que también respetas a los demás y sirves a la humanidad. Probablemente no exprese sus sentimientos demasiado bien, y debido a que tiene estándares tan altos, establece el listón para otros igualmente altos. Lamentablemente, los demás rara vez están a la altura de sus estándares.';
            break;

        case 2:
        case 3:
            elementoChino = 'Agua';
            descripcionElemento = 'Eres perspicaz. Ves debajo de la superficie de la vida y tienes un instinto de lo que está sucediendo en lo profundo de otras personas. Eres propenso a concentrarte en tus propios sentimientos y esto puede provocarte ansiedad y depresión. Sin embargo, al mismo tiempo, te permite reconocer a quienes se encuentran en situaciones similares. Conoces las señales. Esto te da una gran habilidad como consejero y mediador en los asuntos de los demás.';
            break;
        
        case 4:
        case 5:
            elementoChino = 'Madera';
            descripcionElemento = '¡Eres un dador! Muy típicamente, eres una persona sociable con una visión sólida y práctica de la vida. Como resultado de esto, es probable que haya demasiadas personas que se acerquen a ti para buscar ayuda. Das de buena gana y tiendes a sostener a la gente. Lamentablemente, a veces, esto va más allá de tus fuerzas, y tienes que apoyarte en otros a cambio. Afortunadamente, como resultado de tu calidez y compasión, los demás están felices de estar ahí para ti.';
            break;
        
        case 6:
        case 7:
            elementoChino = 'Fuego';
            descripcionElemento = 'Sueles tener suerte porque tu deseo natural de explorar todas las cosas te lleva a muchos lugares diferentes. Estadísticamente, algunos de estos lugares serán lugares de oportunidad. Sin embargo, tus dudas también pueden llevarte a lugares donde las personas más circunspectas tendrán la sabiduría de evitar. Puedes parecer dominante ante los demás, y esto no siempre te facilitará hacer amigos. Tu encanto generalmente gana a pesar de esos momentos incómodos y la percepción de los demás de que puedes ser manipulador. De hecho, tu generosidad de espíritu hacia los demás compensa tus faltas.';
            break;
        
        case 8:
        case 9:
            elementoChino = 'Tierra';
            descripcionElemento = 'La superficie de la tierra es sólida y estable. También lo es este elemento. Como elemento fundamental, tiendes a verte a ti mismo como el centro de todo lo que te rodea. Como el árbol que da sombra a las flores y la hierba debajo de él, así brindas alimento a los demás. Sin embargo, comprendes que eres es el árbol y que eres responsable de las provisiones. Naturalmente, como con el árbol que protege a los que vienen en busca de alimento y refugio debajo de sus ramas, brindas protección a los demás.';
            break;
            
        default:
            elementoChino = 'Año no válido';
            break;
        }
}


asignarAnimal();
asignarElemento();

alert(`${animalChino}+${elementoChino}+${descripcionAnimal}+${descripcionElemento}`);

