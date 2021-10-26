import axios from "axios";
// creando configuracion
const pokemonApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon',
})

export default pokemonApi;