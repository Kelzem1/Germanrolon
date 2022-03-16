
import logo1 from './imgs/logoGerman.png'
import wa from './imgs/whatsapp.png'
import phone from './imgs/phone.png'
import email from './imgs/email.png'




const Homenmore = () =>{
    
    return(
        <div className=" m-auto intro bg-slate-900 shadow-xl shadow-slate-800">
            <div className="encabezado grid-cols-3 gap-6 flex flex-row p-3 fixed top-0 left-100 right-0">
                <p className="boton text-zinc-50 justify-end p-2 bg-yellow-400/[0.9] rounded-full w-10">
                    <a className="" href="tel:+34616661807"><img src={phone} alt='' width={30} height={30} /></a>
                </p>
                <p className="boton text-zinc-50 justify-end p-2 bg-yellow-400/[0.9] rounded-full w-10">
                    <a className="" href="https://wa.me/34616661807"><img src={wa} alt='' width={30} height={30} /></a>
                </p>
                <p className="boton text-zinc-50 justify-end p-2 bg-yellow-400/[0.9] rounded-full w-10">
                    <a className="" href="mailto:germankelu@gmail.com"><img src={email} alt='' width={30} height={30} /></a>
                </p>
            </div>

            <div className="logoinfo h-screen flex flex-col justify-center items-center" >
                <img className="p-1 mt-10" src={logo1} alt="logo" width={900} height={700} />
                <h1 className="text-zinc-50 text-3xl">Construcciones y Reformas</h1>
                <h1 className=" text-zinc-50 m-12 text-center w-96 text-lg xl:w-1/2" >G-E-R-M-A-N Construcciones y Reformas es una empresa familiar con mas de 15 años de experiencia. Empresa nacida en Nerja, Malaga. Realizamos todo tipo de labores relacionadas con las construcciones y reformas de hogares. Ofrecemos un trato profesional y cercano. Contamos con gran cantidad de herramientas para facilitar y hacer realidad cualquier tipo de reformas o construccion que te imagines.</h1>
                <a href="#contact">
                <button className="masboton bg-yellow-400/[0.9] text-lg m-1 rounded-full w-32 h-11">Contacto</button>
                </a>
            </div>
        </div>
    )
}

export default Homenmore