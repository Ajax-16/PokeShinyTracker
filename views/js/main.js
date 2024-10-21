let pokemonNum = 1;

function loadNext() {
    const portrait = document.getElementById('pokemon-portrait')
    pokemonNum++;
    controlNum();
    portrait.src = `https://raw.githubusercontent.com/PokeAPI/sprites/refs/heads/master/sprites/pokemon/${pokemonNum}.png` 
}

function loadPrev() {
    const portrait = document.getElementById('pokemon-portrait')
    pokemonNum--;
    controlNum();
    portrait.src = `https://raw.githubusercontent.com/PokeAPI/sprites/refs/heads/master/sprites/pokemon/${pokemonNum}.png`
}

function controlNum() {
    if(pokemonNum < 1) {
        pokemonNum = 1;
    }
}