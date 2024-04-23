import React, { useEffect, useState } from 'react';
import Skills from './Skills';
import About from './About';


const Home = () => {
  const [showH2, setShowH2] = useState('');
  const [showH3, setShowH3] = useState('');

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

  return (
  
    <div>

   
    <div className='home-page'>
      <div className='home-page-titles'>
        <h1>JOSEP CORTÉS MAÑANICH</h1>
        <h2>{showH2}</h2>
        <h3>{showH3}</h3>
      </div>
    </div>

    <div className='home-about'>
      <About/>
    </div>

    <div className='home-skills'>
      <Skills/>

    </div>
   


    </div>
  );
};

export default Home;