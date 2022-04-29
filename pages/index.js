import Head from 'next/head'

import Header from '../components/Header'
import Hero from '../components/Home/Hero'
import Cards from '../components/Home/Cards'
import Points from '../components/Home/Points'
import Footer from '../components/Footer'
import GIT from '../components/GIT'

const Home = () => {
  return (
    <div className="">
      <Head>
        <title>Designo | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />
      <Hero />
      <Cards />
      <Points />

      <GIT />

      <Footer />
    </div>
  )
}

export default Home