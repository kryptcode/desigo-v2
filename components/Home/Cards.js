import { ChevronRightIcon } from "@heroicons/react/solid"
import { useRouter } from 'next/router'

const Cards = () => {
    const router = useRouter()
  return (
    <div className="w-[90%] mx-auto flex flex-col justify-center md:flex-row space-x-0 md:space-x-3 space-y-3 md:space-y-0 mb-10">
        <div 
            className="relative cursor-pointer hover:-translate-y-3 transition duration-300 group"
            onClick={() => router.push('/web-design')}
        >
            <img src="https://github.com/KXLAA/designo-multi-page-website/blob/master/public/assets/home/desktop/image-web-design-large.jpg?raw=true" className="rounded-lg hidden md:flex" alt="" />
            <img src="https://github.com/KXLAA/designo-multi-page-website/blob/master/public/assets/home/desktop/image-web-design-small.jpg?raw=true" className="rounded-lg md:hidden flex w-[100%] h-36 md:h-auto object-cover" alt="" />
            <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-center text-white">
                <h2 className="text-xl md:text-3xl uppercase mb-2 font-semibold">
                    web design
                </h2>
                <div className="flex items-center space-x-2 justify-center text-lg">
                    <p>
                    View Projects
                    </p>
                    <ChevronRightIcon className="h-6 text-[#e7816b]" />
                </div>
            </div>
            <div className="absolute h-[100%] w-[100%] bg-[#e7816b]/40 top-0 left-0 hidden group-hover:flex rounded-lg" />
        </div>
        <div className="flex-col flex justify-between space-y-3 md:space-y-0">
            <div className="relative cursor-pointer hover:-translate-y-3 transition duration-300 group">
                <img src="https://github.com/KXLAA/designo-multi-page-website/blob/master/public/assets/home/desktop/image-app-design.jpg?raw=true" className="rounded-lg w-[100%] h-36 md:h-auto object-cover" alt="" />
                <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-center text-white">
                    <h2 className="text-xl md:text-3xl uppercase mb-2 font-semibold">
                        app design
                    </h2>
                    <div className="flex items-center space-x-2 justify-center text-lg">
                        <p>
                        View Projects
                        </p>
                        <ChevronRightIcon className="h-6 text-[#e7816b]" />
                    </div>
                </div>
                <div className="absolute h-[100%] w-[100%] bg-[#e7816b]/40 top-0 left-0 hidden group-hover:flex rounded-lg" />
            </div>
            <div className="relative cursor-pointer hover:-translate-y-3 transition duration-300 group">
                <img src="https://github.com/KXLAA/designo-multi-page-website/blob/master/public/assets/home/desktop/image-graphic-design.jpg?raw=true" className="rounded-lg w-[100%] h-36 md:h-auto object-cover" alt="" />
                <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-center text-white">
                    <h2 className="text-xl md:text-3xl uppercase mb-2 font-semibold">
                        graphic design
                    </h2>
                    <div className="flex items-center space-x-2 justify-center text-lg">
                        <p>
                        View Projects
                        </p>
                        <ChevronRightIcon className="h-6 text-[#e7816b]" />
                    </div>
                </div>
                <div className="absolute h-[100%] w-[100%] bg-[#e7816b]/40 top-0 left-0 hidden group-hover:flex rounded-lg" />
            </div>
        </div>
    </div>
  )
}

export default Cards