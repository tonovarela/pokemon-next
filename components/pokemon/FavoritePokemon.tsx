import { Grid, Card } from '@nextui-org/react'
import React, { FC } from 'react'
import { FavoriteCardPokemon } from './FavoriteCardPokemon'

interface Props {
    pokemons: Array<number>
}
export const FavoritePokemon:FC<Props> = ({ pokemons }) => {
    return (
        <Grid.Container gap={2} direction='row' justify='flex-start'>
            {
                pokemons.map(id => (              
                        <FavoriteCardPokemon key={id} idPokemon={id}></FavoriteCardPokemon>              
                ))
            }
        </Grid.Container>
    )
}
