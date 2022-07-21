import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect } from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import Search from '../components/Search'

const Home: NextPage = () => {
  
  return (
    <>
      <Head>
        <title>BLOCKCHAIN EXPLORER</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Search />
      {/* <Transactions /> */}
      <Footer />
    </>
  )
}

export default Home
