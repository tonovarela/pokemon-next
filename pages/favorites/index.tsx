import { Layout } from '../../components/layouts'

import { useEffect, useState } from 'react';
import { localFavorites } from '../../utils';
import { NoFavorites } from '../../components/ui';
import { FavoritePokemon } from '../../components/pokemon';


const IndexPage = () => {
  const [favoritesPokemon, setFavoritesPokemon] = useState<number[]>([]);

  useEffect(() => {
    setFavoritesPokemon(localFavorites.pokemons);
  }, []);

  return (
    <Layout title="favorites">
      <>
      { favoritesPokemon.length==0 ?
      (<NoFavorites></NoFavorites>):
      (
        <FavoritePokemon pokemons={favoritesPokemon}/>
      )}
      </>
    </Layout>
  )
}

export default IndexPage