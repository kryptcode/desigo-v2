import Banner from '../components/Banner'
import Card from '../components/Designs/Card'
import DCard from '../components/Designs/DCard'
import Header from '../components/Header'
import Head from 'next/head'

import GIT from '../components/GIT' 
import Footer from '../components/Footer' 

const data = [
    {
        id: 1,
        img: 'https://designo-multi-page-website-mocha.vercel.app/_next/image?url=%2Fassets%2Fweb-design%2Fdesktop%2Fimage-express.jpg&w=384&q=75',
        name: 'EXPRESS',
        text: 'A multi-carrier shipping website for ecommerce businesses'
    },
    {
        id: 2,
        img: 'https://designo-multi-page-website-mocha.vercel.app/_next/image?url=%2Fassets%2Fweb-design%2Fdesktop%2Fimage-transfer.jpg&w=384&q=75',
        name: 'TRANSFER',
        text: 'Site for low-cost money transfers and sending money within seconds'
    },
    {
        id: 3,
        img: 'https://designo-multi-page-website-mocha.vercel.app/_next/image?url=%2Fassets%2Fweb-design%2Fdesktop%2Fimage-photon.jpg&w=384&q=75',
        name: 'PHOTON',
        text: 'A state-of-the-art music player with high-resolution audio and DSP effects'
    },
    {
        id: 4,
        img: 'https://designo-multi-page-website-mocha.vercel.app/_next/image?url=%2Fassets%2Fweb-design%2Fdesktop%2Fimage-builder.jpg&w=384&q=75',
        name: 'BUILDER',
        text: 'Connects users with local contractors based on their location'
    },
    {
        id: 5,
        img: 'https://designo-multi-page-website-mocha.vercel.app/_next/image?url=%2Fassets%2Fweb-design%2Fdesktop%2Fimage-blogr.jpg&w=384&q=75',
        name: 'BLOGR',
        text: 'Blogr is a platform for creating an online blog or publication'
    },
    {
        id: 6,
        img: 'https://designo-multi-page-website-mocha.vercel.app/_next/image?url=%2Fassets%2Fweb-design%2Fdesktop%2Fimage-camp.jpg&w=384&q=75',
        name: 'CAMP',
        text: 'Get expert training in coding, data, design, and digital marketing'
    },
]

const WebDesign = () => {
  return (
    <div>
        <Head>
            <title>Web Design | Designo </title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <Banner title={'Web Design'} text={'We build websites that serve as powerful marketing tools and bring memorable brand experiences.'} />

        <div className='w-[90%] my-12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-7'>
            {
                data.map(item => (
                    <Card key={item.id} item={item} />
                ))
            }
        </div>

        <div className='flex w-[90%] mx-auto justify-between space-x-7 my-24'>
            {/* Design Cards */}
            <DCard 
                title={'APP DESIGN'} 
                img={'https://github.com/KXLAA/designo-multi-page-website/blob/master/public/assets/image-for-links/app-design.jpg?raw=true'}
                link='/app-design'  
            />
            <DCard 
                title={'GRAPHIC DESIGN'} 
                img={'https://github.com/KXLAA/designo-multi-page-website/blob/master/public/assets/image-for-links/graphic-design.jpg?raw=true'}
                link='/graphic-design'  
            />
        </div>

        <GIT />
        <Footer />
    </div>
  )
}

export default WebDesign