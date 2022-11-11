const fetchPokemon = () => {

    const getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`;

    const pokemonPromises = [];

    for (let i = 1; i <= 150; i++) {

        pokemonPromises.push(fetch(getPokemonUrl(i)).then(response => response.json()));
    }

    // [All - método estático]
    Promise.all(pokemonPromises)
        .then(pokemons => {
            console.log(pokemons)

            // [reduce - para reduzir um array]
            const lisPokemons = pokemons.reduce((accumulator, pokemon) => {

                accumulator += `<li></li>`
            })
        });
};

fetchPokemon()