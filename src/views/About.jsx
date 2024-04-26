
import React from 'react'
import { useTheme } from '../Components/ThemeContext';
import Coverparticles from '../Components/Coverparticles';



function About() {
  const { white } = useTheme(); 

  return (
    <div className= {`container ${white ? 'light-mode' : 'dark-mode'}`} > 
      <Coverparticles/>
    
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
                <div className='map-box'>
                  <iframe className='map' title='mapa' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.9395277932217!2d2.1253464977132155!3d41.37307181080187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4988d97e41dfd%3A0x73841e7866594f8f!2sCarrer%20de%20Bacard%C3%AD%2C%20Sants-Montju%C3%AFc%2C%2008028%20Barcelona!5e0!3m2!1ses!2ses!4v1714135036648!5m2!1ses!2ses"></iframe>
                </div>
            </div>
            
      </div>
    </div>
  )
}

export default About