
import logo1 from './imgs/logoGerman.png'
import wa from './imgs/whatsapp.png'
import phone from './imgs/phone.png'
import email from './imgs/email.png'




const Homenmore = () =>{
    
    return(
    <div className='fondo w-full h-full'>
        <div className=" m-auto intro bg-indigo-800/[0.8] shadow-xl shadow-slate-800">
            <div className="encabezado grid-cols-3 gap-6 flex flex-row p-3 absolute right-1">
                <p className="boton text-zinc-50 justify-end p-2 bg-yellow-400 rounded ">
                    <a className="" href="tel:+34616661807"><img src={phone} alt='' width={30} height={30} /></a>
                </p>
                <p className="boton text-zinc-50 justify-end p-2 bg-yellow-400 rounded ">
                    <a className="" href="https://wa.me/34616661807"><img src={wa} alt='' width={30} height={30} /></a>
                </p>
                <p className="boton text-zinc-50 justify-end p-2 bg-yellow-400 rounded">
                    <a className="" href="mailto:germankelu@gmail.com"><img src={email} alt='' width={30} height={30} /></a>
                </p>
            </div>

            <div className="logoinfo h-screen w-full flex flex-col justify-center items-center" >
                <img className="" src={logo1} alt="logo" width={400} height={700} />
                <h1 className="text-indigo-200 xl:text-4xl text-3xl font-extrabold drop-shadow-xl">Construcciones y Reformas</h1>
                <h1 className=" text-indigo-200 font-bold m-12 text-center w-96 text-lg" >G-E-R-M-A-N Construcciones y Reformas es una empresa familiar con mas de 15 años de experiencia. Empresa nacida en Nerja, Malaga. Realizamos todo tipo de labores relacionadas con las construcciones y reformas de hogares. Ofrecemos un trato profesional y cercano. Contamos con gran cantidad de herramientas para facilitar y hacer realidad cualquier tipo de reformas o construccion que te imagines.</h1>
                <a href="#contact">
                <button className="masboton bg-yellow-300 text-lg rounded-lg w-40 h-10 font-bold text-indigo-900">Contacto</button>
                </a>
            </div>
        </div>
    </div>
    )
}

export default Homenmore