import heroimg from '../images/programmer.png'

import { AiOutlineGithub,AiOutlineLinkedin,AiOutlineWhatsApp,AiOutlineMail , } from "react-icons/ai";

export default function Hero() {
    return (
        <session className="flex px-5 py-32 bg-secondary justify-center">
            <div className='w-1/2 flex flex-col'>
                <h1 className=' text-white text-6xl font-hero-font'>Hi, 
                <br /> I'm Lumin Titus S
                <p className='text-2xl'>I'm a Frontend Developer</p>
                </h1>
                <div className='flex py-8  gap-6 '>
                    <a href='#'><AiOutlineMail size={25} className='text-white hover:text-[#8765CC]'/></a>
                    <a href='#'><AiOutlineGithub size={25} className='text-white hover:text-[#8765CC]'/></a>
                    <a href='#'><AiOutlineLinkedin size={25} className='text-white hover:text-[#8765CC]'/></a>
                    <a href='#'><AiOutlineWhatsApp size={25} className='text-white hover:text-[#8765CC]'/></a>

                </div>
            </div>
       <img className='w-1/3' src={heroimg} />
        </session>
    )
}