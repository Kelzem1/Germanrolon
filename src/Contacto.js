import wa from './imgs/whatsapp.png'
import email from './imgs/email.png'


const Contacto = () =>{
    return(
        <div id='contact' className=' bg-yellow-400/[0.9]'>
            <h2 className='presupuesto flex flex-row m-auto justify-center items-center p-6 text-lg text-center'>Contacta ya con nosotros. ¡Presupuesto gratis!</h2>
            <div className='h-32 grid-row-2 grid-cols-2 flex flex-col justify-center items-center pl-5'>
                <div className='flex flex-row'>
                    <a className="pl-1" href="https://wa.me/34616661807"><img src={wa} alt='' width={45} height={30}/></a>
                    <p className='pl-5 p-4 flex flex-row'>Telf: +34 616-661-807</p>
                </div>
                <div className='flex flex-row'>
                <a className="pl-17" href="mailto:germankelu@gmail.com"><img src={email} alt='' width={45} height={30}/></a>
                <p className='p-5 flex flex-row'>Email: germankelu@gmail.com</p>
                </div>
            </div>
            
        </div>
    )
}
export default Contacto