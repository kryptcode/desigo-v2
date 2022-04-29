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
        img: 'https://designo-multi-page-website-mocha.vercel.app/_next/image?url=%2Fassets%2Fgraphic-design%2Fdesktop%2Fimage-change.jpg&w=384&q=75',
        name: 'TIM BROWN',
        text: "A book cover designed for Tim Brown’s new release, ‘Change’"
    },
    {
        id: 2,
        img: 'https://designo-multi-page-website-mocha.vercel.app/_next/image?url=%2Fassets%2Fgraphic-design%2Fdesktop%2Fimage-boxed-water.jpg&w=384&q=75',
        name: 'BOXED WATER',
        text: 'A simple packaging concept made for Boxed Water'
    },
    {
        id: 3,
        img: 'https://designo-multi-page-website-mocha.vercel.app/_next/image?url=%2Fassets%2Fgraphic-design%2Fdesktop%2Fimage-science.jpg&w=384&q=75',
        name: 'SCIENCE',
        text: 'A poster made in collaboration with the Federal Art Project'
    }
]

const GraphicDesign = () => {
  return (
    <div>
        <Head>
            <title>Graphic Design | Designo </title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <Banner title={'Graphic Design'} text={'We deliver eye-catching branding materials that are tailored to meet your business objectives.'} />

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
                title={'WEB DESIGN'} 
                img={'https://github.com/KXLAA/designo-multi-page-website/blob/master/public/assets/image-for-links/web-design.jpg?raw=true'}
                link='/web-design'  
            />
            <DCard 
                title={'APP DESIGN'} 
                img={'https://github.com/KXLAA/designo-multi-page-website/blob/master/public/assets/image-for-links/app-design.jpg?raw=true'}
                link='/app-design'  
            />
        </div>

        <GIT />
        <Footer />
    </div>
  )
}

export default GraphicDesign