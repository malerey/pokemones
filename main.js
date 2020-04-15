function Pokemon(n, v, a, pic, g) {
  this.grito = g;
  this.foto = pic;
  this.nombre = n;
  this.altura = v;
  this.peso = a;
  this.gritar = function() {
    alert(this.grito);
  };
}

const inicio = poke => {
  if (poke == 'Charmander') {
    let g = 'Charm!';
    let foto =
      'http://assets5.pokemon.com/assets/cms2/img/pokedex/detail/004.png';
    let pokemon = new Pokemon(poke, 100, 60, foto, g);
  } else if (poke == 'Squirtle') {
    let g = 'Squirtle!';
    let foto =
      'http://assets8.pokemon.com/assets/cms2/img/pokedex/detail/007.png';
    let pokemon = new Pokemon(poke, 130, 50, foto, g);
  } else if (poke == 'Bulbasaur') {
    let g = 'Bulbasaur!';
    let foto =
      'http://assets2.pokemon.com/assets/cms2/img/pokedex/detail/001.png';
    let pokemon = new Pokemon(poke, 110, 55, foto, g);
  }
  if (poke == 'Pikachu') {
    let g = 'Pika!';
    let foto =
      'http://assets8.pokemon.com/assets/cms2/img/pokedex/detail/025.png';
    let pokemon = new Pokemon(poke, 95, 65, foto, g);
  }
  nombrePokemon.textContent = pokemon.nombre;
  datosPokemon.textContent =
    'El pokemon se llama ' +
    pokemon.nombre +
    ', mide ' +
    pokemon.altura +
    ' cm y pesa ' +
    pokemon.peso +
    ' kg.';
  fotoPokemon.innerHTML = '<img src=' + foto + " alt='pokemon'>";
};
inicio('Charmander');
