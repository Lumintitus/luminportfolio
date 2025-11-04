import todolistimg from '../images/do-to-list.png'
import ecommerce from '../images/e-commerce.png'

export default function Projects() {
    return (
        <section id='project' className="flex flex-col px-5 py-20 justify-center  font-hero-font bg-secondary text-white text-[3rem]">
            <div className="w-full">
                <div className="flex flex-col px-10 py-5">
                    <h1 className="text-3xl border-b-4 mb-5 font-bold w-[8rem]">Projects</h1>
                    <div className=''></div>
                    <p className='text-xl'>This are  some of my best projects. I have built these width React , javascript and Tailwind Css. Chect them out</p>
                </div>

            </div>
            <div className="w-full">
                <div className='flex flex-col md:flex-row px-10 gap-5'>
                    <div className='relative'>
                        <img className='h-[370px] w-[500px]' src={todolistimg}/>
                    <div className='project-desc'>
                        <p className='text-center text-xl px-5 py-5'>E-Commerce Website build with Reactjs</p>
                    </div>
                    </div>
                    
                    <div className='relative'>
                        <img className='h-[370px] w-[500px]' src={ecommerce}/>
                    <div className='project-desc'>
                        <p className='text-center text-xl  px-5 py-5'>E-Commerce Website build with Reactjs</p>
                    </div>
                    </div>
                    
                    <div className='relative'>
                        <img className='h-[370px] w-[500px]' src={ecommerce} />
                    <div className='project-desc'>
                        <p className='text-center text-xl  px-5 py-5'>E-Commerce Website build with Reactjs</p>
                    </div>
                    </div>
                    
                </div>

            </div>
        </section>
    )
}