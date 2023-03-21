import type { GetStaticProps, NextPage } from 'next'

import { Layout } from '../components/layouts'
import { pokeAPi } from '../api'
import { PokemonListResponse, SmallPokemon } from '../interfaces'
import { Card, Grid, Image, Row, Text } from '@nextui-org/react';
import { PokemonCard } from '../components/pokemon/PokemonCard';



interface Props {
  pokemons: SmallPokemon[];
}


const Home: NextPage<Props> = ({ pokemons }) => {


  return (
    <Layout title='Listado de pokemon'>
      <>
        <Grid.Container gap={2} justify='flex-start'>
          {pokemons.map((pokemon:SmallPokemon) =>                      
              <PokemonCard key={pokemon.id} pokemon={pokemon} />                          
          )
          }
        </Grid.Container>
      </>
    </Layout>
  )
}
export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeAPi.get<PokemonListResponse>("/pokemon?limit=151");
  const pokemons: SmallPokemon[] = data.results.map((pokemon, index) => {
    return {
      ...pokemon,
      id: index + 1,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index + 1}.svg`
    }
  });
  return {
    props: {
      pokemons
    }
  }
}

export default Home
