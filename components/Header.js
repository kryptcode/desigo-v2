import { MenuIcon } from '@heroicons/react/solid'
import { useRouter } from 'next/router'
import { useState } from 'react'

const Header = () => {
  const router = useRouter()
  const [nav, setNav] = useState(false)
  console.log(nav);
  return (
    <div className="w-[90%] mx-auto py-8">
      <div className='flex items-center'>
          <img 
              src="https://designo-multi-page-website-mocha.vercel.app/_next/image?url=%2Fassets%2Fshared%2Fdesktop%2Flogo-dark.png&w=640&q=75" 
              alt="designo" 
              className="w-[12rem] cursor-pointer"
              onClick={() => router.push('/')}
          />
          <div className="ml-auto hidden md:flex items-center space-x-7">
              <p 
                className="cursor-pointer hover:underline tracking-wider"
                onClick={() => router.push('/about-us')}
              >OUR COMPANY</p>
              <p 
                className="cursor-pointer hover:underline tracking-wider"
                onClick={() => router.push('/locations')}
              >
                LOCATIONS</p>
              <p className="cursor-pointer hover:underline tracking-wider"
              onClick={() => router.push('/contact')}>CONTACT</p>
          </div>

          <div className='md:hidden flex ml-auto'>
              <MenuIcon className='h-8 cursor-pointer' onClick={() => setNav(!nav)} />
          </div>
        </div>
        
        {
          nav &&  (
            <div className='transition duration-200 pt-5 space-y-4'>
               <p 
              className="cursor-pointer hover:underline tracking-wider"
              onClick={() => router.push('/about-us')}
            >OUR COMPANY</p>
            <p 
              className="cursor-pointer hover:underline tracking-wider"
              onClick={() => router.push('/locations')}
            >
              LOCATIONS</p>
            <p className="cursor-pointer hover:underline tracking-wider"
            onClick={() => router.push('/contact')}>CONTACT</p> 
            </div>
          )
        }    
    </div>
  )
}

export default Header