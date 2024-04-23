import Homenmore from './Homenmore';
import SimpleSlider from './SimpleSlider';
import Info from './Info'
import Contacto from './Contacto';
import Footer from './Footer'
import './App.css';


function App() {
  return (
    <div className='flex flex-col w-full bg-slate-900'>
      <div className=''>
        <Homenmore />
        <Info />
        <SimpleSlider />
        <Contacto />
        <Footer />
      </div>
    </div>
  );
}

export default App;
