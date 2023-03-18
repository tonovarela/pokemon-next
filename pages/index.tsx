import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Button } from '@nextui-org/react'
import { Layout } from '../components/layouts'

const Home: NextPage = () => {
  return (
    <Layout title='Pokemon _app'>      
        <>
        <Button shadow color="gradient" auto>
          Hola mundo
        </Button>
        </>        
      
    </Layout>
  )
}

export default Home
