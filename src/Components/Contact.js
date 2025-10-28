import resume from "../images/Resume-pana.png"
export default function Contact() {
    return (
        <section id='contact' className="flex flex-col bg-secondary text-white font-hero-font px-5 py-32">
           
            <div className="flex flex-col items-center ">
               
                    <h1 className="text-4xl border-b-4 mb-5 font-bold w-[8rem]">Contact</h1>
                    <p className="md:text-4xl pb-5"> If You want to discuss more detail, please contact me.</p>
                    <p className="py-2"><span className="font-bold">Email: </span>lumintitus05@gmail.com..</p>
                    <p className="py-2"><span className="font-bold">Phone: </span>+91 9360730480.</p>
            </div>
        </section>
    )
}