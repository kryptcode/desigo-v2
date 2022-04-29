import React from 'react'

const Button = ({text}) => {
  return (
    <button className='bg-white py-2 text-black px-5 rounded-md hover:bg-white/40 hover:text-white transition duration-300 hover:-translate-y-2 uppercase text-[16px]'>
        {text}
    </button>
  )
}

export default Button