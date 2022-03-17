import Slider from "react-slick";
import './Styles/Slider.css';
import foto1 from './imgs/foto1.jpeg'
import foto2 from './imgs/foto2.jpeg'
import foto3 from './imgs/foto3.jpeg'
import foto4 from './imgs/foto4.jpeg'
import foto5 from './imgs/foto6.jpeg'
import foto6 from './imgs/foto5.jpeg'
import foto7 from './imgs/foto8.jpeg'
import foto8 from './imgs/foto7.jpeg'

const SimpleSlider = () => {
    const settings = {
      infinite: true,
      fade:true,
      speed: 400,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <div className="bg-slate-900/[0.9]">
        <Slider className="Slidercont" {...settings}>
          
          <div className="cont">
              <img src={foto1} alt="antes" height={500} width={500}/>
          </div>
          <div className="cont">
            <img src={foto2} alt="despues" height={500} width={500}/>
          </div>
          <div className="cont">
            <img src={foto3} alt="antes" height={500} width={500}/>
          </div>
          <div className="cont">
            <img src={foto4} alt="despues" height={500} width={500}/>
            </div>
            <div className="cont">
            <img src={foto5} alt="despues" height={500} width={500}/>
            </div>
            <div className="cont">
            <img src={foto6} alt="despues" height={500} width={500}/>
            </div>
            <div className="cont">
            <img src={foto7} alt="despues" height={500} width={500}/>
            </div>
            <div className="cont">
            <img src={foto8} alt="despues" height={500} width={500}/>
            </div>
      
      
      
      
        </Slider>
        </div>
    );
  }
export default SimpleSlider