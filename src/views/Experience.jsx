import React from 'react'
import { useTheme } from '../Components/ThemeContext'
import Coverparticles from '../Components/Coverparticles';

function Experience  () {
    const { white } = useTheme();  

  
  
  
return (
    <div className={`main-experience ${white ? 'light-mode' : 'dark-mode'}`}>
        <Coverparticles/>
        <div className={`wrapp-experience ${white ? 'light-mode' : 'dark-mode'}`}>   
            <div className='wrapp'>
                <div className='experience'>
                    <h2> IT EXPERIENCE</h2>
                        <div className='jobs'>
                            <ul className='jobs-list'>
                                <li > 
                                        <h4 className='tituloExperience'>AGENCIA GRÁFICA GELIS: NOVEMBER 2023 - JANUARY 2024.  </h4>
                                        <ul className='jobs-item'>
                                            <li><p>Workplace: Collaborator.  Senior in charge: Pere Gelis, phone number 699230125</p></li>
                                            <li><p>Website: <a href="https://www.gelis.cat/es/home-2/">www.gelis.cat.</a> </p></li>
                                            <li><p>My job was to assist in developing route distribution in the backend for smoother website functionality. Additionally, I conducted testing for a shopping cart in a potential e-commerce platform.</p></li>
                                        </ul>
                                </li>
                    
                                <li className='jobs-item'> 
                                        <h4 className='tituloExperience'>BIOS URN: APRIL 2023- SEPTEMBER 2023.  </h4> 
                                        <ul className='jobs-item'>
                                            <li><p>Workplace: Collaborator. Senior in charge: Pere Cortés, phone number 628836801</p></li>
                                            <li><p>Website: <a href="https://urnabios.com/es/urna/">www.urnabios.com.</a> </p></li>
                                            <li><p>My job was to collaborate in website maintenance, layout design for newsletters.</p></li>
                                        </ul>
                                </li>
                            </ul>
                        </div>
                </div>

                <div className='background'>
                        <h2>EDUCATIONAL BACKGROUND</h2>
                        <div className='background-container'>
                        <ul className='education'>
                                <li > 
                                        <h4 className='tituloExperience'>IRONHACK BOOTCAMP, WEB DEVELOPER, MARCH 2022- OCTOBER 2022  </h4>
                                        <ul className='jobs-item'>
                                            <li><p>FRONTEND: HTML5, CSS3, JAVASCRIPT. Learned, how to build a good frontend, and how to resolve all kind of javascript problems, understanding the logic of being a developer.</p></li>
                                            <li><p>BACKEND: NODE.JS, EXPRESS.JS, MONGO DB. Learned how to make a CRUD successfully, how to connect with an API, how to manage a no relational data base like mongo, and how to connect frontend to the backend using node.js and his interface express js</p></li>
                                            <li><p>LIBRARY: REACT.JS. Learned how to use in a great way a Javascript library, in that case react</p></li>
                                        </ul>
                                </li>
                    
                                <li > 
                                        <h4 className='tituloExperience'>UOC "UNIVERSITAT OBERTA DE CATALUÑA"  DAM SUPERIOR DEGREE. SEPTEMBER 2023- ACTUALLY </h4> 
                                        <ul className='jobs-item'>
                                            <li><p>DATABASE: MYSQL. Learned how to use a realtional database, and understand all the differents types of database.</p></li>
                                            <li><p>OPERATING SYSTEMS. Learned to use VirtualBox and the proper installation of various operating systems, as well as their advantages and disadvantages</p></li>
                                            <li><p>SECURITY AND PROCESSES OF A SYSTEM. Actually, learning how to code with Python.</p></li>
                                        </ul>
                                </li>
                            </ul>
                        </div>
                </div>

            </div>




            
                
        </div>
    </div>
  )
}

export default Experience
