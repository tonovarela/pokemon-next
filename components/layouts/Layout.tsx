import Head from "next/head"
import { FC } from "react"
import { Navbar } from "../ui";

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
            <Navbar></Navbar>          
            <main style={{
                padding: '0px 20px',

            }}>
                {children}
            </main>
        </>
    )
}
