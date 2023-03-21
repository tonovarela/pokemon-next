import axios from "axios";


export  const pokeAPi = axios.create({
    baseURL: "https://pokeapi.co/api/v2"
});

