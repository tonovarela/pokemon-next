
import { Card, Grid, Row, Text, red } from '@nextui-org/react';
import { SmallPokemon } from '../../interfaces';
import { FC } from 'react';
import {  useRouter } from 'next/router';
interface Props {
  pokemon: SmallPokemon;
}
export const PokemonCard: FC<Props> = ({ pokemon }) => {

  const router = useRouter();
  const onClick = () => {    
    router.push(`/pokemon/${pokemon.id}`)

  }
  return (
    <Grid xs={6} sm={3} md={2} xl={1} key={pokemon.id} onClick={onClick}>
      <Card isHoverable >
        <Card.Body css={{ p: 3 }}>
          <Card.Image src={pokemon.img} width="100%" height={150} css={{ padding: "15px" }} />
        </Card.Body>
        <Card.Footer>
          <Row justify="space-between">
            <Text transform='capitalize'>{pokemon.name}</Text>
            <Text>{pokemon.id}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  )
}
