
import { useState } from "react";
import { Card, Grid, Text, Button,Image,Container } from "@nextui-org/react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";

import { Layout } from "../../components/layouts";
import { pokeAPi } from '../../api/pokeApi';
import { Pokemon } from "../../interfaces";
import { localFavorites } from "../../utils";



interface Props {
  pokemon: Pokemon;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {

  const [isInFavorites, setIsInFavorites] = useState(localFavorites.isPokemonFavorite(pokemon.id));

  const onToogleFavorite =  () => {    
    localFavorites.toogleFavorites(pokemon.id);
    setIsInFavorites(!isInFavorites);
  }

  
  
  
  
  return (
    <Layout title={pokemon.name}>
      <Grid.Container css={{ marginTop: "5px" }} gap={2}>
        <Grid xs={12} sm={4}>
          <Card isHoverable css={{ padding: '30px' }}>
            <Card.Body>
              <Card.Image
                src={pokemon.sprites.other?.dream_world.front_default || '/no-image.png'}
                alt={pokemon.name}
                width="100%"
                height={200}
              >
              </Card.Image>
            </Card.Body>

          </Card>

        </Grid>

        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header css={{ display: 'flex', justifyContent: "space-between" }}>
              <Text h1 transform="capitalize">{pokemon.name}</Text>
              <Button onPress={onToogleFavorite}  ghost={!isInFavorites} color="gradient">
                Guardar en favoritos
              </Button>
            </Card.Header>
            <Card.Body>              
                <Text size={30}>Sprites:</Text>
                <Container direction="row" display="flex">
                <Image src={pokemon.sprites.front_default} alt={pokemon.name}
                width={100}
                height={100}/>                
                <Image src={pokemon.sprites.back_default} alt={pokemon.name}
                width={100}
                height={100}/>
                
                <Image src={pokemon.sprites.front_shiny} alt={pokemon.name}
                width={100}                
                height={100}/>
                  <Image src={pokemon.sprites.back_shiny} alt={pokemon.name}
                width={100}
                height={100}/>
                
              </Container>
            </Card.Body>
          </Card>
        </Grid>


      </Grid.Container>

    </Layout>

  )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const pokemons151: string[] = [...Array(151)].map((value, index) => `${index + 1}`);
  return {
    paths: pokemons151.map(id => ({ params: { id } })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };
  const { data } = await pokeAPi.get<Pokemon>(`/pokemon/${id}`);
  return {
    props: {
      pokemon: data
    }
  }
}







export default PokemonPage

