const Banner = ({ title, text }) => {
  return (
    <div className='w-[90%] mx-auto bg-[#e7816b] text-white text-center py-8 rounded-lg'>
        <h2 className='text-4xl font-semibold mb-5'>
            {title}
        </h2>
        <p className='w-[50%] mx-auto'>
            {text}
        </p>
    </div>
  )
}

export default Banner