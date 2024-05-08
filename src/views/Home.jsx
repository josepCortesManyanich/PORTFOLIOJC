import React from 'react';
import Skills from './Skills';
import About from './About';
import Experience from "./Experience";
import ThemeContext from '../Components/ThemeContext';
import { useContext } from 'react';
import Projects from './Projects';
import Coverparticles from '../Components/Coverparticles';

const Home = () => {
  /*
  const [showH2, setShowH2] = useState('');
  const [showH3, setShowH3] = useState('');
  */
  const context = useContext(ThemeContext);

  const white = context ? context.white : false
  /*
  useEffect(() => {
    const subtitle = 'JUNIOR DEVELOPER';
    const subtitle2 = 'MERN FULL STACK';

    let i = 0;
    const timerH2 = setInterval(() => {
      if (i < subtitle.length) {
        setShowH2(subtitle.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timerH2);
      }
    }, 200);

    let j = 0;
    const timerH3 = setInterval(() => {
      if (j < subtitle2.length) {
        setShowH3(subtitle2.slice(0, j + 1));
        j++;
      } else {
        clearInterval(timerH3);
      }
    }, 300);

    return () => {
      clearInterval(timerH2);
      clearInterval(timerH3);
    };
  }, []);
  */

  return (
  
    <div className='main-home'>
      <Coverparticles/>
    
    <div className={`home-page ${white ? 'light-mode' : 'dark-mode'}`}>
      <div>
        
      </div>
      <div className='home-page-titles'>
        <h1>JOSEP CORTÉS MAÑANICH</h1>
        <h2>JUNIOR WEB DEVELOPER</h2>
        <h3>FULL STACK</h3>
      </div>
    </div>

    
      <About/>
   


    
      <Projects/>
   

   
      <Skills/>

   

   
      <Experience/>
    



   


    </div>
  );
};

export default Home;
