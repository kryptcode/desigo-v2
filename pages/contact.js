import Head from "next/head"
import Hero from "../components/Contact/Hero"
import Footer from "../components/Footer"
import GIT from "../components/GIT"
import Header from "../components/Header"
import LocationsCards from '../components/LocationsCards'

const Contact = () => {
  return (
    <div>
        <Head>
            <title>Contact Us | Designo</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <Hero />    
        <LocationsCards />
        <GIT />
        <Footer />
    </div>
  )
}

export default Contact