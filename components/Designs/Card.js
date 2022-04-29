const Card = ({ item }) => {
  return (
    <div className="group cursor-pointer rounded-lg bg-[#e7816b]/30 hover:scale-105 duration-200 transition hover:bg-[#e7816b] shadow-xl">
        <img src={item.img} alt="" className="rounded-t-lg w-full" />
        <div className="text-center py-6 px-2 space-y-5">
            <h3 className="text-2xl text-[#e7816b] group-hover:text-white">
                {item.name}
            </h3>
            <p className="text-black/80 group-hover:text-white">
                {item.text}
            </p>
        </div>
    </div>
  )
}

export default Card