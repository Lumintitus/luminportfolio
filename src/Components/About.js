import about from "../images/Programming-amico.png"
export default function About() {
    return (
        <section className="flex flex-col md:flex-row bg-secondary text-white font-hero-font px-6">
            <div className="md:w-1/2 py-5">
                <img className="w-[450px]" src={about} />
            </div>
            <div className="md:w-1/2 flex justify-center ">
                <div className="flex flex-col justify-center">
                    <h1 className="text-4xl border-b-4 mb-5 font-bold w-[9rem]">About Me</h1>
                    <p className="text-2xl">Actively seeking a Frontend Developer role. Key skills: HTML5, CSS3, JavaScript, React.js, Tailwind CSS and Responsive Web Design. Available for immediate joining.</p>
                </div>

            </div>
        </section>
    )
}