import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Parallax, useParallax } from 'react-scroll-parallax';
import { useIsSmall } from '../Hook/Breakpoint';

function Hero() {

  const isSmall = useIsSmall()
  
  const { ref } = useParallax({ 
   
  });

  const google = useParallax(
    isSmall ? { translateY: ["0px", "400px"], speed: -5} : 
    { translateY: ["-300px", "400px"], speed: -5}
  );

  const antinomy = useParallax({ 
    translateY: ["-300px", "400px"],
    speed: 5
  });

  const daysOfType = useParallax({ 
    translateY: ["-300px", "400px"],
    speed: 5
  });

  const Ayco = useParallax({ 
    translateY: ["-300px", "400px"],
    speed: 5
  });

  const LEchonova = useParallax({ 
    translateY: ["-300px", "400px"],
    speed: 5
  });

  const Lvmh = useParallax({ 
    translateY: ["-300px", "400px"],
    speed: 5
  });

  const Hublot = useParallax({ 
    translateY: ["-300px", "400px"],
    speed: 5
  });

  const ByuTv = useParallax({ 
    translateY: ["-300px", "400px"],
    speed: 5
  });

  const ScaleAi = useParallax({ 
    translateY: ["-300px", "400px"],
    speed: 5
  });

  const NuageSurMer = useParallax({ 
    translateY: ["-300px", "400px"],
    speed: 5
  });

  const DaysOfType02 = useParallax({ 
    translateY: ["-300px", "400px"],
    speed: 5
  });

  const FastCompanyMagazine = useParallax({ 
    translateY: ["-300px", "400px"],
    speed: 5
  });

  const TousATable = useParallax({ 
    translateY: ["-300px", "400px"],
    speed: 5
  });

  const Bic = useParallax({ 
    translateY: ["-300px", "400px"],
    speed: 5
  });

  return (
    <>  
    <Parallax>
      <div ref={ref} className="google h-screen bg-cover bg-center bg-fixed ">
        <h1 ref={google.ref} class="hover-underline-animation text-6xl sm:text-7xl md:text-8xl lg:text-9xl  text-white text-center">Google</h1>
      </div>
    </Parallax>
      
    <Parallax>
      <div ref={ref} className="antinomy h-screen bg-cover bg-center bg-fixed overflow-hidden ">
       <h1 ref={antinomy.ref} class="hover-underline-animation text-6xl sm:text-7xl md:text-8xl lg:text-9xl  text-white grid place-items-center">Antinomy</h1>
      </div>
    </Parallax>

    <Parallax>
      <div ref={ref} className="daysOfType h-screen bg-cover bg-center bg-fixed overflow-auto" >
      <h1 ref={daysOfType.ref} class="text-5xl sm:text-7xl md:text-8xl lg:text-9xl  text-white grid place-items-center">36 days of type</h1>
      </div>
    </Parallax>
     
    {/* Ayco */}
    <Parallax>
      <div ref={ref} className="Ayco h-screen bg-cover bg-center bg-fixed overflow-auto" >
      <h1 ref={Ayco.ref} class="text-6xl sm:text-7xl md:text-8xl lg:text-9xl  text-white grid place-items-center">Ayco</h1>
      </div>
    </Parallax>

    {/* L'Echonova */}
    <Parallax>
      <div ref={ref} className="LEchonova h-screen bg-cover bg-center bg-fixed overflow-auto" >
      <h1 ref={LEchonova.ref} class="text-6xl sm:text-7xl md:text-8xl lg:text-9xl  text-white grid place-items-center">L'Echonova</h1>
      </div>
    </Parallax>

    {/* Lvmh */}
    <Parallax>
      <div ref={ref} className="Lvmh h-screen bg-cover bg-center bg-fixed overflow-auto" >
      <h1 ref={Lvmh.ref} class="text-6xl sm:text-7xl md:text-8xl lg:text-9xl  text-white grid place-items-center">Lvmh</h1>
      </div>
    </Parallax>

    {/* Hublot */}
    <Parallax>
      <div ref={ref} className="Hublot h-screen bg-cover bg-center bg-fixed overflow-auto" >
      <h1 ref={Hublot.ref} class="text-6xl sm:text-7xl md:text-8xl lg:text-9xl  text-white grid place-items-center">Hublot</h1>
      </div>
    </Parallax>

    {/* Byu TV */}
    <Parallax>
      <div ref={ref} className="ByuTv h-screen bg-cover bg-center bg-fixed overflow-auto" >
      <h1 ref={ByuTv.ref} class="text-6xl sm:text-7xl md:text-8xl lg:text-9xl  text-white grid place-items-center">Byu Tv</h1>
      </div>
    </Parallax>
      
    {/* Scale Ai */}
    <Parallax>
      <div ref={ref} className="ScaleAi h-screen bg-cover bg-center bg-fixed overflow-auto" >
      <h1 ref={ScaleAi.ref} class="text-6xl sm:text-7xl md:text-8xl lg:text-9xl  text-white grid place-items-center">Scale Ai</h1>
      </div>
    </Parallax>

    {/* Nuage-sur-Mer */}
    <Parallax>
      <div ref={ref} className="NuageSurMer h-screen bg-cover bg-center bg-fixed overflow-auto" >
      <h1 ref={NuageSurMer.ref} class="text-5xl sm:text-7xl md:text-8xl lg:text-9xl  text-white grid place-items-center">Nuage-sur-Mer</h1>
      </div>
    </Parallax>

    {/* 36 days of type */}
    <Parallax>
      <div ref={ref} className="DaysOfType02 h-screen bg-cover bg-center bg-fixed overflow-auto" >
      <h1 ref={DaysOfType02.ref} class="text-5xl sm:text-7xl md:text-8xl lg:text-9xl  text-white grid place-items-center">36 days of type</h1>
      </div>
    </Parallax>

    {/* fast company magazine */}
    <Parallax>
      <div ref={ref} className="FastCompanyMagazine h-screen bg-cover bg-center bg-fixed overflow-auto" >
      <h1 ref={FastCompanyMagazine.ref} class="text-5xl sm:text-7xl md:text-8xl lg:text-9xl  text-white text-center">Fast Company Magazine</h1>
      </div>
    </Parallax>

    {/* Tous a table */}
    <Parallax>
      <div ref={ref} className="TousATable h-screen bg-cover bg-center bg-fixed overflow-auto" >
      <h1 ref={TousATable.ref} class="text-6xl sm:text-7xl md:text-8xl lg:text-9xl  text-white grid place-items-center">Tous a table</h1>
      </div>
    </Parallax>

    {/* Bic */}
    <Parallax>
      <div ref={ref} className="Bic h-screen bg-cover bg-center bg-fixed overflow-auto" >
      <h1 ref={Bic.ref} class="text-6xl sm:text-7xl md:text-8xl lg:text-9xl  text-white grid place-items-center">Bic</h1>
      </div>
    </Parallax>
    </> 
  );
}

export default Hero;
