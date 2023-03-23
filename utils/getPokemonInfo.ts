import { pokeAPi } from "../api";

const get =async(params)=>{
        
    const { data } = await pokeAPi.get(`/pokemon/${params}`);
    const pokemon = {
        id: data.id,
        name: data.name,
        sprites:data.sprites    
    };
    return pokemon;
}

export default {
    get
}
