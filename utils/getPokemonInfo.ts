import { pokeAPi } from "../api";

const get = async (params) => {

    try {
        const { data } = await pokeAPi.get(`/pokemon/${params}`);
        const pokemon = {
            id: data.id,
            name: data.name,
            sprites: data.sprites
        };
        return pokemon;
    } catch (error) {
return null;
    }


}

export default {
    get
}
