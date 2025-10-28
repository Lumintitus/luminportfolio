import resume from "../images/Resume-pana.png"
export default function Resume() {
    return (
        <section id='resume' className="flex flex-col md:flex-row bg-secondary text-white font-hero-font px-6">
            <div className=" flex justify-end md:w-1/2 py-5">
                <img className="w-[500px]" src={resume} />
            </div>
            <div className="md:w-1/2 flex justify-center">
                <div className="flex flex-col justify-center">
                    <h1 className="text-4xl border-b-4 mb-5 font-bold w-[8rem]">Resume</h1>
                    <p className="text-2xl">You can view my resume <a className="btn" href="#">Download</a></p>
                </div>

            </div>
        </section>
    )
}