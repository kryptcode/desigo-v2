const Banner = ({ heading, img, p1, p2}) => {
  return (
    <div className="w-[90%] mx-auto bg-[#e7816b]/20 flex flex-col md:flex-row object-cover mb-12 rounded-lg">
        <div className="flex-1">
            <img src={img} alt="" className="w-full h-[300px] md:h-auto object-cover rounded-t-lg md:rounded-t-none md:rounded-l-lg" />
        </div>
        <div className="flex-1 flex flex-col items-start justify-center px-12 space-y-5  py-4 md:py-0">
            <h2 className="text-[#e7816b] text-5xl">
                {heading}
            </h2>
            <p>
                {p1}
            </p>
            <p>
                {p2}
            </p>
        </div>
    </div>
  )
}

export default Banner