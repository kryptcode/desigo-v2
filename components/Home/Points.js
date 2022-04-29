
const Points = () => {
  return (
    <div className="w-[90%] mx-auto flex flex-col md:flex-row space-x-0 md:space-x-4 space-y-8 items-end mb-10">
        <div className="text-center flex flex-col items-center space-x-3 md:space-x-0">
            <img src="https://designo-multi-page-website-mocha.vercel.app/_next/image?url=%2Fassets%2Fhome%2Fdesktop%2Fillustration-passionate.svg&w=640&q=75" alt="" />
            <div>
                <h5 className="text-xl uppercase tracking-widest font-semibold mb-5">
                    passionate
                </h5>
                <p className="">
                Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.
                </p>
            </div>
        </div>
        <div className="text-center flex flex-col items-center space-x-3 md:space-x-0">
            <img src="https://designo-multi-page-website-mocha.vercel.app/_next/image?url=%2Fassets%2Fhome%2Fdesktop%2Fillustration-resourceful.svg&w=640&q=75" alt="" />
            <div>
                <h5 className="text-xl uppercase tracking-widest font-semibold mb-5">
                RESOURCEFUL
                </h5>
                <p className="">
                Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.
                </p>
            </div>
        </div>
        <div className="text-center flex flex-col items-center space-x-3 md:space-x-0">
            <img src="https://designo-multi-page-website-mocha.vercel.app/_next/image?url=%2Fassets%2Fhome%2Fdesktop%2Fillustration-friendly.svg&w=640&q=75" alt="" />
            <div>
                <h5 className="text-xl uppercase tracking-widest font-semibold mb-5">
                FRIENDLY
                </h5>
                <p className="">
                We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Points