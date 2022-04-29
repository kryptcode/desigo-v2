import Head from 'next/head'
import Header from '../components/Header'
import Card from '../components/Locations/Card'
import GIT from '../components/GIT'
import Footer from '../components/Footer'

const data = [
  {
    id: 1,
    name: 'Canada',
    img: 'https://designo-multi-page-website-mocha.vercel.app/assets/locations/desktop/image-map-canada.png',
    loc1: '3886 Wellington Street',
    loc2: 'Toronto, Ontario M9C 3J5',
    phone: '+1 253-863-8967',
    mail: 'contact@designo.co' 
  },
  {
    id: 2,
    name: 'Australia',
    img: 'https://designo-multi-page-website-mocha.vercel.app/assets/locations/desktop/image-map-australia.png',
    loc1: '19 Balonne Street',
    loc2: 'New South Wales 2443',
    phone: '(02) 6720 9092',
    mail: 'contact@designo.au' 
  },
  {
    id: 3,
    name: 'United Kingdom',
    img: 'https://designo-multi-page-website-mocha.vercel.app/assets/locations/desktop/image-map-united-kingdom.png',
    loc1: '13 Colorado Way',
    loc2: 'Rhyd-y-fro SA8 9GA',
    phone: '078 3115 1400',
    mail: 'contact@designo.uk' 
  },
]

const locations = () => {
  return (
    <div>
        <Head>
            <title>Designo | Locations</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />

        <div className='w-full md:w-[90%] mx-auto'>
            {
              data.map(item => (
                <Card key={item.id} item={item} />
              ))
            }
        </div>

        <GIT />
        <Footer />
    </div>
  )
}

export default locations