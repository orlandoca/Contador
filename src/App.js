import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';
import {useState} from 'react';




function App() {

  const [numeroClics,setNumClics] = useState(0); 


  const manejarClic = () => {
    setNumClics( numeroClics+ 1);

  }

  const reiniciarContador = () => {  
    setNumClics(0);
  }

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        {/*<img 
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt='Logo de freeCodeCamp'/> */}
          <h1><strong>CONTADOR DE CLICK</strong></h1>
      </div>
        <div className='contenedor-principal'>
          <Contador numeroClics= {numeroClics} />
          <Boton
            texto='Clic'
            esBotonDeClic={true}
            manejarClic={manejarClic}/>
          <Boton
            texto='Reiniciar'
            esBotonDeClic={false}
            manejarClic={reiniciarContador}/>
        </div>
    </div>
  );
}

export default App;
