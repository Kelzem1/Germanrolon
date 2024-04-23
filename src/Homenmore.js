
import logo1 from './imgs/logoGerman.png'
import wa from './imgs/whatsapp.png'
import phone from './imgs/phone.png'
import email from './imgs/email.png'




const Homenmore = () =>{
    
    return(
    <div className='fondo w-full h-full'>
        <div className=" m-auto intro bg-violet-900/80 h-screen flex flex-col justify-center align-middle">

            <div className="logoinfo w-full flex flex-col justify-center items-center p-2" >
                <img className="" src={logo1} alt="logo" width={700} height={500} />
                <h1 className="text-indigo-200 xl:text-4xl text-2xl font-extrabold drop-shadow-xl">Construcciones y Reformas</h1>
                <h1 className=" text-indigo-200 font-bold m-12 text-center w-full px-4 text-lg xl:text-xl" >G-E-R-M-A-N Construcciones y Reformas es una empresa familiar con mas de 15 años de experiencia. Empresa nacida en Nerja, Malaga. Realizamos todo tipo de labores relacionadas con las construcciones y reformas de hogares. Ofrecemos un trato profesional y cercano. Contamos con gran cantidad de herramientas para facilitar y hacer realidad cualquier tipo de reformas o construccion que te imagines.</h1>
                <a href="#contact">

                <button className="masboton bg-yellow-400 text-lg rounded w-44 h-10 font-bold text-indigo-900">Contacto</button>
                </a>
            </div>

            <div className="encabezado grid-cols-3 gap-5 m-3 flex flex-row p-3 justify-center align-middle">
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

        </div>
    </div>
    )
}

export default Homenmore