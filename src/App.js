import './App.css';
import { Parallax, useParallax } from 'react-scroll-parallax';

function App() {
  
  const { ref } = useParallax({ 
   
  });

  return (
    <>
      <Parallax>
      <div ref={ref} className="parallax bg-fixed">
        <h1 class="text-9xl text-white grid place-items-center pt-[25%]">Google</h1>
        </div>
      </Parallax>
      
    <Parallax>
    <div ref={ref} className="parallax01">
          <h1>Hello world lorem</h1>
      </div>
    </Parallax>

    <Parallax>
      <div ref={ref} className="parallax" >
        <h1>lorem</h1>
        </div>
      </Parallax>
     

      

    </>
      
       
     
      
  );
}

export default App;
