import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/About/Hero'
import Banner from '../components/About/Banner'
import LocationsCards from '../components/LocationsCards'
import GIT from '../components/GIT'

const Company = () => {
  return (
    <div>
        <Head>
        <title>Designo | About Us</title>
        <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />
        <Hero />
        <Banner 
          heading={'World-class talent'}
          img='https://designo-multi-page-website-mocha.vercel.app/assets/about/desktop/image-world-class-talent.jpg'
          p1={'We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.'}
          p2='Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.'
        />
        <LocationsCards />
        <Banner
          heading='The real deal'
          img='https://designo-multi-page-website-mocha.vercel.app/assets/about/desktop/image-real-deal.jpg'
          p1='As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.'
          p2='We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.'
        />
        <GIT />
    </div>
  )
}

export default Company