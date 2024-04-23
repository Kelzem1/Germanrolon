import wa from './imgs/whatsapp.png'
import email from './imgs/email.png'
import phone from './imgs/phone.png'


const Contacto = () =>{
    return(
        <div id='contact' className=' bg-yellow-400 text-black p-5 '>
            <h2 className='flex-col mt-10 font-extrabold m-auto justify-center items-center text-2xl text-center'>Contacta ya con nosotros.<br/> Sin compromiso!</h2>
            <div className='grid grid-cols-3 w-80 justify-center m-auto items-center my-10 gap-9'>

                <div className='flex justify-center align-middle'>
                    <a className='' href="tel:+34616661807">
                        <img src={phone} alt='phone' width={45} height={30}/>
                    </a>
                </div>

                <div className='flex flex-row w-full justify-center align-middle'>
                    <a className="" href="https://wa.me/34616661807"><img src={wa} alt='whatsapp' width={45} height={30}/></a>
                </div>

                <div className='flex flex-row w-full justify-center align-middle'>
                <a className="" href="mailto:germankelu@gmail.com"><img src={email} alt='mail' width={45} height={30}/></a>
                </div>

            </div>
            
        </div>
    )
}
export default Contacto