import React from 'react'
import { useTheme } from '../Components/ThemeContext';
import Coverparticles from '../Components/Coverparticles';

const Skills = () => {
const { white } = useTheme(); 
    
  return (

    <div className={`skills-container ${white ? 'light-mode' : 'dark-mode'}`}>
        <Coverparticles/>
        <div className='skills'>
                <h1>MY SKILLS</h1>
                <h3 className='title11'>I love to learn new things and experiment with new technologies.</h3>
                <h4 className='title2'>These are some of the major languages, technologies, tools and platforms I have worked with:</h4>
            <div className='skills-item'>
                <h3 className='title1'>Languages & Databases</h3>
                <ul>
                    <li><img className='html-image' alt='HTML5' src='https://res.cloudinary.com/josepcortes/image/upload/v1713881218/Captura_desde_2024-04-23_16-05-35-removebg-preview_hex0cj.png' /></li> 
                    <li><img className='css-image'alt='CSS3' src='https://res.cloudinary.com/josepcortes/image/upload/v1713881248/Captura_desde_2024-04-23_16-04-31-removebg-preview_m02tab.png' /></li>
                    <li><img className='javascript-image' alt='JAVASCRIPT' src='https://res.cloudinary.com/josepcortes/image/upload/v1713824459/descarga_2_vubqwe.png' /></li>
                    <li><img className='mongo-image' alt='MONGO DB' src='https://res.cloudinary.com/josepcortes/image/upload/v1713824490/descarga_4_gxrpob.png' /></li>
                    <li><img className='mysql-image' alt='MY SQL' src='https://res.cloudinary.com/josepcortes/image/upload/v1713824470/descarga_3_b9wwrf.jpg' /></li>
                </ul>
            </div>
        
            
            <div className='skills-item'>
                <h3 className='title1'>Frameworks & Technologies</h3>
                <ul>
                    <li><img className='react-image' alt='REACT' src='https://res.cloudinary.com/josepcortes/image/upload/v1713891708/Captura_desde_2024-04-23_18-48-42-removebg-preview_pqytoy.png' /></li> 
                    <li><img className='tailwind-image'alt='TAILWIND' src='https://res.cloudinary.com/josepcortes/image/upload/v1713891904/Captura_desde_2024-04-23_19-03-56-removebg-preview_c9dagt.png' /></li>
                    <li><img className='bootstrap-image' alt='BOOTSTRAP' src='https://res.cloudinary.com/josepcortes/image/upload/v1713891738/Captura_desde_2024-04-23_18-49-15-removebg-preview_vmtsmx.png' /></li>
                    <li><img className='node-image' alt='NODE' src='https://res.cloudinary.com/josepcortes/image/upload/v1713892107/Captura_desde_2024-04-23_19-07-30_dk58j0.png' /></li>
                    <li><img className='express-image' alt='EXPRESS' src='https://res.cloudinary.com/josepcortes/image/upload/v1713891236/Captura_desde_2024-04-23_18-49-54_j2rk39.png' /></li>
                </ul>
            </div>

            <div className='skills-item'>
                


            </div>


            <div className='skills-item'>
                <h3 className='title1'>Tools & Platforms</h3>
                <ul>
                    <li><img className='git-image' alt='GIT' src='https://res.cloudinary.com/josepcortes/image/upload/v1713892374/Captura_desde_2024-04-23_19-12-30-removebg-preview_ol6ddr.png' /></li>
                    <li><img className='vbox-image' alt='VBOX' src='https://res.cloudinary.com/josepcortes/image/upload/v1713892435/Captura_desde_2024-04-23_19-09-40-removebg-preview_fhq0yg.png' /></li>
                </ul>
            </div>


        </div>





    </div>
  )
}

export default Skills
