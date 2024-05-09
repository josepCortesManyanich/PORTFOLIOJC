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
  */
  
  const context = useContext(ThemeContext);

  const white = context ? context.white : false
  /* Effecto de las letras
  useEffect(() => {
    const subtitle = 'JUNIOR DEVELOPER';
    

    let i = 0;
    const timerH2 = setInterval(() => {
      if (i < subtitle.length) {
        setShowH2(subtitle.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timerH2);
       
      }
    }, 200);


    return () => {
      clearInterval(timerH2);
    };
  }, []);
*/


  return (
  
    <div className='main-home'>
      <Coverparticles/> 
    
    <div className={`home-page ${white ? 'light-mode' : 'dark-mode'}`}>
    
      <div className='home-page-titles'>
        <h1>JOSEP CORTÉS MAÑANICH</h1>
        <h2>FULL STACK, WEB DEVELOPER</h2>
       
      </div>
      <div className='home-page-image'>
        <img src='https://res.cloudinary.com/josepcortes/image/upload/v1715262542/IMG_6048-removebg-preview_ga7qeu.png ' alt='' />
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
