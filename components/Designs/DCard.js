import { ChevronRightIcon } from "@heroicons/react/solid"
import {useRouter} from 'next/router' 

const DCard = ({ title, img, link}) => {
    const router = useRouter()
  return (
    <div 
        className="relative cursor-pointer flex-1 hover:-translate-y-3 h-36 transition duration-300 group"
        onClick={() => router.push(link)}
    >
        <img src={img} className="rounded-lg w-[100%] h-[100%] object-cover" alt="" />
        <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-center text-white">
            <h1 className="text-3xl uppercase mb-2 font-semibold">
                {title}
            </h1>
            <p className="flex items-center space-x-2 justify-center">
                <span>
                VIEW PROJECTS
                </span>
                <ChevronRightIcon className="h-6 text-[#e7816b]" />
            </p>
        </div>
        <div className="absolute h-[100%] w-[100%] bg-[#e7816b]/40 top-0 left-0 hidden group-hover:flex rounded-lg" />
    </div>
  )
}

export default DCard