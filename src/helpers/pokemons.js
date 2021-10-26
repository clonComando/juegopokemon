import { def } from '@vue/shared';
import pokemonApi from '../api/pokemon';

const getPokemons = () => {
    //creas los espacios donde va a ir el arreglo
    const pokemonsArr = Array.from(Array(650))
        // generar el iterament
    return pokemonsArr.map((_, index) => index + 1)
}

const randomPokemonsGeneratos = () => {
    let pokemonsmixed = getPokemons().sort(() => Math.random() - 0.5);
    pokemonsmixed = pokemonsmixed.splice(0, 4)
    return pokemonsmixed;

}

const getPokemonsOptions = async() => {
    const pokemonsmixed = randomPokemonsGeneratos();
    const pokemons = await getPokemonsName(pokemonsmixed);
    return pokemons
}

const getPokemonsName = async([a, b, c, d] = []) => {
    const promiseArray = [
        pokemonApi.get(`/${a}`),
        pokemonApi.get(`/${b}`),
        pokemonApi.get(`/${c}`),
        pokemonApi.get(`/${d}`)
    ]
    const [p1, p2, p3, p4] = await Promise.all(promiseArray)

    return [
        { name: p1.data.name, id: p1.data.id },
        { name: p2.data.name, id: p2.data.id },
        { name: p3.data.name, id: p3.data.id },
        { name: p4.data.name, id: p4.data.id }

    ]
}



export default getPokemonsOptions;