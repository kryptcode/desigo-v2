const Card = ({ item }) => {
  return (
    <div className={`flex flex-col-reverse md:flex-row ${item.id === 2 && 'md:flex-row-reverse'} gap-10 justify-between mb-10`}>
        <div className="flex-grow bg-[#fdf3f0] pt-16 px-8 rounded-lg" >
            <h2 className="text-5xl text-[#e7816b] font-semibold mb-6">
                {item.name}
            </h2>
            <div  className="flex space-x-6">
                <div>
                    <h6 className="font-semibold">Designo Central Office</h6>
                    <p>{item.loc1}</p>
                    <p>{item.loc2}</p>
                </div>
                <div>
                    <h6>Contact</h6>
                    <p>P: {item.phone}</p>
                    <p>M: {item.mail}</p>
                </div>
            </div>
        </div>
        <img src={item.img} className='rounded-lg' />
    </div>
  )
}

export default Card