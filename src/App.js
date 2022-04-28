import './App.css';
import { Parallax, useParallax } from 'react-scroll-parallax';

function App() {
  
  const { ref } = useParallax({ 
   
  });

  const google = useParallax({ 
    translateY: ["0px", "550px"],
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
          <h1 ref={google.ref} class="text-6xl md:text-9xl text-white grid place-items-center">Google</h1>
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
     

      

    </>
      
       
     
      
  );
}

export default App;
