import './App.css';
import { Parallax, useParallax } from 'react-scroll-parallax';

function App() {
  
  const { ref } = useParallax({ 
   
  });

  const google = useParallax({ 
    translateY: ["0px", "500px"],
    speed: -5
  });

  const antinomy = useParallax({ 
    translateY: ["-300px", "500px"],
    speed: -5
  });

  const daysOfType = useParallax({ 
    translateY: ["-300px", "500px"],
    speed: -5
  });



  return (
    <>
      <Parallax>
        <div ref={ref} className="google h-screen bg-cover bg-center bg-fixed ">
          <h1 ref={google.ref} class="text-6xl md:text-9xl text-white text-center">Google</h1>
        </div>
      </Parallax>
      
    <Parallax>
      <div ref={ref} className="antinomy h-screen bg-cover bg-center bg-fixed overflow-hidden ">
       <h1 ref={antinomy.ref} class="text-6xl md:text-9xl text-white grid place-items-center">Antinomy</h1>
      </div>
    </Parallax>

    <Parallax>
      <div ref={ref} className="daysOfType h-screen bg-cover bg-center bg-fixed overflow-auto" >
      <h1 ref={daysOfType.ref} class="text-6xl md:text-9xl text-white grid place-items-center">36 days of type</h1>
      </div>
    </Parallax>
     
    {/* Ayco */}
    <Parallax>
      <div ref={ref} className="Ayco h-screen bg-cover bg-center bg-fixed overflow-auto" >
      <h1 ref={daysOfType.ref} class="text-6xl md:text-9xl text-white grid place-items-center">Ayco</h1>
      </div>
    </Parallax>

    {/* L'Echonova */}
    <Parallax>
      <div ref={ref} className="LEchonova h-screen bg-cover bg-center bg-fixed overflow-auto" >
      <h1 ref={daysOfType.ref} class="text-6xl md:text-9xl text-white grid place-items-center">L'Echonova</h1>
      </div>
    </Parallax>

    {/* Lvmh */}
    <Parallax>
      <div ref={ref} className="Lvmh h-screen bg-cover bg-center bg-fixed overflow-auto" >
      <h1 ref={daysOfType.ref} class="text-6xl md:text-9xl text-white grid place-items-center">Lvmh</h1>
      </div>
    </Parallax>

    {/* Hublot */}
    <Parallax>
      <div ref={ref} className="Hublot h-screen bg-cover bg-center bg-fixed overflow-auto" >
      <h1 ref={daysOfType.ref} class="text-6xl md:text-9xl text-white grid place-items-center">Hublot</h1>
      </div>
    </Parallax>

    {/* Byu TV */}
    <Parallax>
      <div ref={ref} className="ByuTv h-screen bg-cover bg-center bg-fixed overflow-auto" >
      <h1 ref={daysOfType.ref} class="text-6xl md:text-9xl text-white grid place-items-center">Byu Tv</h1>
      </div>
    </Parallax>
      
    {/* Scale Ai */}
    <Parallax>
      <div ref={ref} className="ScaleAi h-screen bg-cover bg-center bg-fixed overflow-auto" >
      <h1 ref={daysOfType.ref} class="text-6xl md:text-9xl text-white grid place-items-center">Scale Ai</h1>
      </div>
    </Parallax>

    {/* Nuage-sur-Mer */}
    <Parallax>
      <div ref={ref} className="NuageSurMer h-screen bg-cover bg-center bg-fixed overflow-auto" >
      <h1 ref={daysOfType.ref} class="text-6xl md:text-9xl text-white grid place-items-center">Nuage-sur-Mer</h1>
      </div>
    </Parallax>

    {/* 36 days of type */}
    <Parallax>
      <div ref={ref} className="DaysOfType02 h-screen bg-cover bg-center bg-fixed overflow-auto" >
      <h1 ref={daysOfType.ref} class="text-6xl md:text-9xl text-white grid place-items-center">36 days of type</h1>
      </div>
    </Parallax>

    {/* fast company magazine */}
    <Parallax>
      <div ref={ref} className="FastCompanyMagazine h-screen bg-cover bg-center bg-fixed overflow-auto" >
      <h1 ref={daysOfType.ref} class="text-6xl md:text-9xl text-white grid place-items-center">Fast Company Magazine</h1>
      </div>
    </Parallax>

    {/* Tous a table */}
    <Parallax>
      <div ref={ref} className="TousATable h-screen bg-cover bg-center bg-fixed overflow-auto" >
      <h1 ref={daysOfType.ref} class="text-6xl md:text-9xl text-white grid place-items-center">Tous a table</h1>
      </div>
    </Parallax>

    {/* Bic */}
    <Parallax>
      <div ref={ref} className="Bic h-screen bg-cover bg-center bg-fixed overflow-auto" >
      <h1 ref={daysOfType.ref} class="text-6xl md:text-9xl text-white grid place-items-center">Bic</h1>
      </div>
    </Parallax>

    </>
      
       
     
      
  );
}

export default App;
