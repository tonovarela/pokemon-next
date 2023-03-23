import { FC } from "react";

import { Card, Grid } from "@nextui-org/react"
import { useRouter } from 'next/router';

interface Props {
    idPokemon:number;
}
export const FavoriteCardPokemon:FC<Props> = ({idPokemon}) => {
  const router= useRouter();
  const onFavoriteClicked=()=>{
    console.log(idPokemon);
    router.push(`/pokemon/${idPokemon}`);
  }
  return (
    <Grid xs={6} sm={3} md={2} xl={1} key={idPokemon} onClick={onFavoriteClicked} >      
    <Card isHoverable css={{ padding: 10 }} >
      <Card.Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${idPokemon}.svg`} width={'100%'} height={140} />
    </Card>
    </Grid>
  )
}
