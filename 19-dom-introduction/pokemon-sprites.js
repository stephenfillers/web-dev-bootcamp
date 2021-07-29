const container = document.querySelector('#container');
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
const totalPokemon = 898;

for (let i = 1; i <= totalPokemon; i++) {
    const pokemon = document.createElement('div');
    pokemon.classList.add('pokemon');
    const label = document.createElement('span');
    label.innerText = `#${i}`
    const newImage = document.createElement('img');
    newImage.src = `${baseURL}${i}.png`;

    pokemon.append(newImage);
    pokemon.append(label);
    container.append(pokemon);
}