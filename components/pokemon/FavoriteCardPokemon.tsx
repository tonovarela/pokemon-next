import { FC } from "react";

import { Card } from "@nextui-org/react"
import { useRouter } from 'next/router';

interface Props {
    idPokemon:number;
}
export const FavoriteCardPokemon:FC<Props> = ({idPokemon}) => {
  const router= useRouter();
  const onFavoriteClicked=()=>{
    router.push(`/pokemon/${idPokemon}`);
  }
  return (
    <Card isHoverable css={{ padding: 10 }} >
      <Card.Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${idPokemon}.svg`} width={'100%'} height={140} />
    </Card>
  )
}
