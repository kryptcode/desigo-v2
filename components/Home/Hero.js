import Button from '../Button'

const Hero = () => {
  return (
    <div className="w-[90%] mx-auto bg-[#e7816b] mb-11 py-16 px-4 relative rounded-lg flex flex-col md:flex-row">
        <div className='text-white w-[100%] md:w-[60%] z-50 flex-[1.5]'>
            <h2 className='text-5xl font-semibold mb-5'>
            Award-winning custom designs and digital branding solutions
            </h2>
            <p className='w-[80%] text-white/80 mb-8'>
            With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.
            </p>
            <Button text='learn more' />
        </div>

        <div className='flex-1'>

        </div>

        <img className='absolute bottom-0 right-2 h-[20rem] z-0' src="https://designo-multi-page-website-mocha.vercel.app/assets/home/tablet/tablethero.png" alt="" />
    </div>
  )
}

export default Hero