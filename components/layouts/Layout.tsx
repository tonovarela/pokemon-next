import Head from "next/head"
import { FC, PropsWithChildren } from "react"
interface Props {
    title?: string;
    children:JSX.Element
}



export const Layout:FC<Props>= ({children,title='Pokemon app'} ) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="author" content="Tonovarela"></meta>
                <meta name="description" content="Info del pokemon"></meta>
                <meta name="keywords" content={`${title}, pokemon,pokedex`}></meta>
            </Head>
            <main>
                {children}
            </main>
        </>
    )
}
