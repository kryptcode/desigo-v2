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
        img: 'https://designo-multi-page-website-mocha.vercel.app/_next/image?url=%2Fassets%2Fapp-design%2Fdesktop%2Fimage-airfilter.jpg&w=384&q=75',
        name: 'AIRFILTER',
        text: 'Solving the problem of poor indoor air quality by filtering the air'
    },
    {
        id: 2,
        img: 'https://designo-multi-page-website-mocha.vercel.app/_next/image?url=%2Fassets%2Fapp-design%2Fdesktop%2Fimage-eyecam.jpg&w=384&q=75',
        name: 'EYECAM',
        text: 'Product that lets you edit your favorite photos and videos at any time'
    },
    {
        id: 3,
        img: 'https://designo-multi-page-website-mocha.vercel.app/_next/image?url=%2Fassets%2Fapp-design%2Fdesktop%2Fimage-faceit.jpg&w=384&q=75',
        name: 'FACEIT',
        text: 'Get to meet your favorite internet superstar with the faceit app'
    },
    {
        id: 4,
        img: 'https://designo-multi-page-website-mocha.vercel.app/_next/image?url=%2Fassets%2Fapp-design%2Fdesktop%2Fimage-todo.jpg&w=384&q=75',
        name: 'TODO',
        text: 'A todo app that features cloud sync with light and dark mode'
    },
    {
        id: 5,
        img: 'https://designo-multi-page-website-mocha.vercel.app/_next/image?url=%2Fassets%2Fapp-design%2Fdesktop%2Fimage-loopstudios.jpg&w=384&q=75',
        name: 'LOOPSTUDIOS',
        text: 'A VR experience app made for Loopstudios'
    },
]

const AppDesign = () => {
  return (
    <div>
        <Head>
            <title>App Design | Designo </title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />
        <Banner title={'App Design'} text={'Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.'} />

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

export default AppDesign