import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Info = () =>{
    useEffect(() => {
        AOS.init({
            duration:1000
        });
        AOS.refresh();
      }, []);
        return(
        <div className="bg-slate-900">
            <div  className="grid-cols-1 grid-rows-3 p-2 flex-col justify-center m-4 grid gap-4 lg:grid-cols-3 lg:m-auto lg:mt-5 lg:mb-5 lg:grid-rows-1">


                <div data-aos="fade-up" className='tarjeta1'>
                <div className="bg-indigo-900/[.6]  text-center text-slate-100 h-60 rounded shadow">
                    <h1 className='text-3xl py-4'>Alicatado</h1>
                    <p className='p-5'>El alicatado es nuestra especialidad. Contamos con las mejores herramientas y materiales para llevar a cabo el mejor trabajo posible.</p>
                </div>
                </div>
                <div data-aos="fade-up" className="tarjeta2">
                <div className="grid-cols-2 bg-indigo-900/[.6]  text-center text-slate-100 h-60 rounded shadow">
                    <h1 className='text-3xl py-4'>Reformas Integrales</h1>
                    <p className='p-5'>Si necesitas reformar completamente tu hogar, cuenta con nosotros. Disponemos de todo tipo de herramientas. Trabajamos con las mejores tiendas de materiales de la zona.</p>
                </div>
                </div>

                <div data-aos="fade-up" className="tarjeta3">
                <div className="grid-cols-2 bg-indigo-900/[.6] text-center text-slate-100 h-60 rounded shadow">
                    <h1 className='text-3xl py-4'>Solería</h1>
                    <p className='p-5'>¿Quieres cambiar el viejo suelo de tu casa? Cuenta con nosotros. Te recomendaremos varias opciones.</p>
                </div>
                </div>

            </div>
        </div>
    )
}
export default Info