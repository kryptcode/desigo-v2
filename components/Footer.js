import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black text-gray-500'>
      <div className='w-[90%] mx-auto'>
        <div className='flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 py-6 border-b border-gray-700/40 mb-4'>
          <img src="https://designo-multi-page-website-mocha.vercel.app/assets/shared/desktop/logo-light.png" alt="" className='w-[12rem]' />
          <div className='flex space-x-3'>
            <p className='text-white/90 uppercase tracking-wide cursor-pointer hover:underline'>
              our company
            </p>
            <p className='text-white/90 uppercase tracking-wide cursor-pointer hover:underline'>
              locations
            </p>
            <p className='text-white/90 uppercase tracking-wide cursor-pointer hover:underline'>
              contacts
            </p>
          </div>
        </div>
        <div className='flex items-start justify-between'>
          <div>
            <p className='font-semibold mb-1'>
            Designo Central Office
            </p>
            <p className='mb-1'>
            3886 Wellington Street
            </p>
            <p className='mb-1'>
            Toronto, Ontario M9C 3J5
            </p>
          </div>

          <div>
            <p className='font-semibold mb-1'>
            Designo Central Office
            </p>
            <p className='mb-1 font-semibold'>
            P : +1 253-863-8967
            </p>
            <p className='mb-1 font-semibold'>
            M : contact@designo.co
            </p>
          </div>

          <div>
            {/* Icons */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer