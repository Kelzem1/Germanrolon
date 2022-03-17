
const Info = () =>{
        return(
        <div className="">
            <div  className="h-full grid-cols-1 grid-rows-3 p-2 flex-col justify-center m-auto mt-3 grid gap-4 lg:grid-cols-3 lg:m-auto lg:mt-5 lg:mb-5 lg:grid-rows-1">


                <div className='tarjeta1'>
                <div className="grid-cols-2 bg-slate-900/[.7] shadow-slate-500 text-center text-slate-100 h-60 rounded shadow-2xl lg:h-48">
                    <h1 className='text-4xl p-2'>Alicatado</h1>
                    <p className='m-11'>El alicatado es nuestra especialidad. Contamos con las mejores herramientas y materiales para llevar a cabo el mejor trabajo posible.</p>
                </div>
                </div>
                <div className="tarjeta2">
                <div className="grid-cols-2 bg-slate-900/[.7] shadow-slate-500 text-center text-slate-100 h-60 rounded shadow-xl lg:h-48">
                    <h1 className='text-4xl p-2'>Reformas Integrales</h1>
                    <p className='m-11'>Si necesitas reformar completamente tu hogar, cuenta con nosotros. Disponemos de todo tipo de herramientas. Trabajamos con las mejores tiendas de materiales de la zona.</p>
                </div>
                </div>

                <div className="tarjeta3">
                <div className="grid-cols-2 bg-slate-900/[.7] shadow-slate-500 text-center text-slate-100 h-60 rounded shadow-lg lg:h-48">
                    <h1 className='text-4xl p-2'>Solería</h1>
                    <p className='m-11'>¿Quieres cambiar el viejo suelo de tu casa? Cuenta con nosotros. Te recomendaremos varias opciones.</p>
                </div>
                </div>

            </div>
        </div>
    )
}
export default Info