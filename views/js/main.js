let pokemonNum = 1;

function loadNext() {
    const portrait = document.getElementById('pokemon-portrait')
    pokemonNum++;
    controlNum();
        portrait.src = `../resources/pokemon_sprites/${pokemonNum}.gif`
}

function loadPrev() {
    const portrait = document.getElementById('pokemon-portrait')
    pokemonNum--;
    controlNum();
    portrait.src = `../resources/pokemon_sprites/${pokemonNum}.gif`
}

function controlNum() {
    if(pokemonNum < 1) {
        pokemonNum = 1;
    }
}