const LocationsCards = () => {
  return (
    <div className="w-[90%] mx-auto flex flex-col md:flex-row justify-between mb-10">
        <div className="flex flex-col items-center space-y-5">
            <img src="https://designo-multi-page-website-mocha.vercel.app/_next/image?url=%2Fassets%2Fshared%2Fdesktop%2Fillustration-canada.svg&w=640&q=75" alt="" />
            <h5 className="uppercase text-3xl">
                canada
            </h5>
            <button className="py-2 px-5 bg-[#e7816b] text-white uppercase rounded-md hover:-translate-y-2 hover:opacity-80 transition duration-300">
                see location
            </button>
        </div>
        <div className="flex flex-col items-center space-y-5">
            <img src="https://designo-multi-page-website-mocha.vercel.app/_next/image?url=%2Fassets%2Fshared%2Fdesktop%2Fillustration-australia.svg&w=640&q=75" alt="" />
            <h5 className="uppercase text-3xl">
                australia
            </h5>
            <button className="py-2 px-5 bg-[#e7816b] text-white uppercase rounded-md hover:-translate-y-2 hover:opacity-80 transition duration-300">
                see location
            </button>
        </div>
        <div className="flex flex-col items-center space-y-5">
            <img src="https://designo-multi-page-website-mocha.vercel.app/_next/image?url=%2Fassets%2Fshared%2Fdesktop%2Fillustration-united-kingdom.svg&w=640&q=75" alt="" />
            <h5 className="uppercase text-3xl">
                united kingdom
            </h5>
            <button className="py-2 px-5 bg-[#e7816b] text-white uppercase rounded-md hover:-translate-y-2 hover:opacity-80 transition duration-300">
                see location
            </button>
        </div>
    </div>
  )
}

export default LocationsCards