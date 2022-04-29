import React from 'react'

const Hero = () => {
  return (
    <div className='w-[90%] mx-auto bg-[#e7816b] rounded-lg flex flex-col-reverse md:flex-row mt-10 mb-16'>
        <div className='flex-1 w-full flex flex-col items-start justify-center px-10 py-8 text-white'>
            <h2 className='text-5xl mb-3'>
                About Us
            </h2>
            <p>
            Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences.
            </p>
        </div>
        <div className='flex-1 w-full '>
            <img src="https://designo-multi-page-website-mocha.vercel.app/assets/about/desktop/image-about-hero.jpg" className='h-[300px] md:h-auto object-cover w-full rounded-t-lg md:rounded-t-none md:rounded-r-lg' alt="" />
        </div>
    </div>
  )
}

export default Hero