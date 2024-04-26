import React, { useEffect, useState } from 'react';
import Skills from './Skills';

import Experience from "./Experience";
import ThemeContext from '../Components/ThemeContext';
import { useContext } from 'react';
import Projects from './Projects';


const Home = () => {
  const [showH2, setShowH2] = useState('');
  const [showH3, setShowH3] = useState('');
  const context = useContext(ThemeContext);

  const white = context ? context.white : false

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
  
    <div className='main-home'>

    
    <div className={`home-page ${white ? 'light-mode' : 'dark-mode'}`}>
      <div>
        
      </div>
      <div className='home-page-titles'>
        <h1>JOSEP CORTÉS MAÑANICH</h1>
        <h2>{showH2}</h2>
        <h3>{showH3}</h3>
      </div>
    </div>

    <div className={`home-about ${white ? 'light-mode' : 'dark-mode'}`}>
    <div className= {`container ${white ? 'light-mode' : 'dark-mode'}`} > 
     
    
     <div className='about'>
          
           <div className='about-me'>
               <div className='title-about'>
                   <h1 >ABOUT ME</h1>
               </div>
               <p>
                   My name is Josep Cortes Mañanich, I am 27 years old, and I am a proactive person always willing to adapt to new changes. Some of these changes have driven my search for a new path in my professional career, which is web development. I build my projects with empathy, creativity, and total dedication to the challenges that arise.
                   
                   
               </p>
               <p>
                   My educational journey began with a scientific bachelor degree, and upon graduating, I decided to delve into the world of chemical engineering. Therefore I enjoy it, I decided to hold on, due to economic reasons. However, when Covid-19 hit and I lost my job, I came up with decision to continue my education. Thus, I had to find a job where I could balance both: study and work, so I started working at Ametller Origen, where I am currently employed.
               </p>

               <p> 
                   
                   My first steps in development were taken when I enrolled at Ironhack, where I learned most of what I know about web development, mastering the use of JavaScript and the React.js library on the frontend. I also delved into backend development with Node.js, Express.js, and MongoDB database. I successfully connected a backend with a frontend, performing all its functions: authentication, CRUD operations, contacting an external API, and creating one.
                   Considering myself an ambitious person, I have decided to pursue a higher degree in Multimedia Application Development, remotely at 'Universitat Oberta de Cataluña'. I came up with a decision because to improve my skills and  increase my level of development.
                   Through my work experience and education. I have developed strong  skills in JavaScript  , being able to afford any problems. Also, I am good in listening, which aids to  my ability in understanding a situation and prepare an appropiate response.
                   I am sure that previous experience will help me pick up new skills and quickly excel.
                   
               </p>
               
           </div>
           <div className='information-container'>
               <div className='information-box'>
                       <h3> Personal information</h3>
                       <ul>
                           <li><p><strong>Mail: </strong>Josepcortes6@gmail.com</p></li>
                           <li><p><strong>Phone:</strong> +34 643 705 774</p></li>
                           <li><p><strong>City: </strong>Barcelona</p></li>
                           <li><p><strong>Address: </strong>Bacardi Street 49-51</p></li>
                           <li><p><strong>Postal code:</strong> 08028</p></li>
                       </ul>


               </div>
           </div>
           
     </div>
   </div>
    </div>


    <div className={`home-projects ${white ? 'light-mode' : 'dark-mode'}`}>
      <Projects/>
    </div>

    <div className={`home-skills ${white ? 'light-mode' : 'dark-mode'}`}>
      <Skills/>

    </div>

    <div className={`home-experience ${white ? 'light-mode' : 'dark-mode'}`}>
      <Experience/>
    </div>



   


    </div>
  );
};

export default Home;
