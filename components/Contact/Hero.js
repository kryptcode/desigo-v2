import Button from "../Button"

const Hero = () => {
  return (
    <div className="bg-[#e7816b] mx-auto w-full md:w-[90%] rounded-none md:rounded-lg p-10 flex flex-col md:flex-row space-y-8 md:space-y-0">
        <div className="flex-1 flex flex-col justify-center text-white space-y-5">
            <h2 className="text-4xl font-semibold">
                Contact Us
            </h2>
            <p className="w-[80%]">
            Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line.
            </p>
        </div>

        <div className="flex flex-col items-end flex-1 space-y-5">
            <input type="text" placeholder="Full Name" className="w-full bg-transparent placeholder:text-white/80 border-b focus:border-b-2 focus:py-2 outline-none text-white py-1 transition duration-200" />
            <input type="text" placeholder="Email Address" className="w-full bg-transparent placeholder:text-white/80 border-b focus:border-b-2 focus:py-2 outline-none text-white py-1 transition duration-200" />
            <input type="text" placeholder="Phone" className="w-full bg-transparent placeholder:text-white/80 border-b focus:border-b-2 focus:py-2 outline-none text-white py-1 transition duration-200" />
            <input type="text" placeholder="Your Message" className="w-full bg-transparent placeholder:text-white/80 border-b focus:border-b-2 focus:py-2 outline-none text-white py-1 transition duration-200" />
            <Button text='SUBMIT' />
        </div>
    </div>
  )
}

export default Hero