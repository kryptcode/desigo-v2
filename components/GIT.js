import Button from "./Button"

const GIT = () => {
  return (
    <div className='relative pb-8'>
        <div className='w-[90%] mx-auto bg-[#e7816b] rounded-lg flex flex-col md:flex-row justify-between items-center py-16 px-12 gap-24 z-50'>
          <div className='flex-1 text-center md:text-left'>
            <h3 className='text-5xl text-white font-semibold w-full md:w-[70%] mb-5'>
            Let’s talk about your project
            </h3>
            <p className='text-white/70 w-full md:w-[70%]'>
            Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.
            </p>
          </div>
            <Button text='get in touch' />
        </div>
        <div className='absolute bg-black bottom-0 w-full h-32 -z-10' />
      </div>
  )
}

export default GIT