import { Spacer, Text, useTheme, Image, Link } from "@nextui-org/react"
import NextLink from 'next/link';
export const Navbar = () => {
    const { theme } = useTheme();
    return (
           <div style={{
                display: 'flex',
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 20px',
                backgroundColor: theme?.colors.gray300.value,
            }}>
                <NextLink href="/" passHref>
                    <div style={{ display:'flex', alignItems:'center', justifyContent: 'space-between' }}>
                        <Image
                            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
                            alt="Icono de la app"
                            width={ 70 }
                            height={ 70 }
                        />
                        <Text color="white" h2>P</Text>
                        <Text color="white" h3>okémon</Text>
                        <Spacer css={{ flex: 1 }} />
                    </div>
                </NextLink>
                <NextLink href="/favorites" passHref>
                    <div>
                        <Text color="white">Favoritos</Text>
                    </div>
                </NextLink>
            </div>
    )
}
