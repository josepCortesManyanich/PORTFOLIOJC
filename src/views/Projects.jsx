import React from "react"
import { useTheme } from '../Components/ThemeContext';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import Coverparticles from '../Components/Coverparticles';
import SwiperCore from 'swiper'
SwiperCore.use([Navigation]);


function Projects  () {
    const { white } = useTheme(); 

    return(
        <div className={`swiper-container ${white ? 'light-mode' : 'dark-mode'}`} >
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <div>
            
                
          <SwiperSlide>
          <Coverparticles/>
                    <div className="card">
                    <div className="title-projects"><h2 >SOME THINGS I HAVE BUILT</h2></div>
                        <div className="card-contains">
                        <div className="card-inner">
                                    <div className="card-front">
                                    <img src="https://res.cloudinary.com/josepcortes/image/upload/v1713903761/Captura_desde_2024-04-23_22-22-14_cy15fe.png" alt="" /> 
                                    </div>
                                    <div className="card-back">
                                        <ul>
                                            <li className="card-title-back">MOVIES APP</li>
                                            <li><p>-Personal project, in order to practise. </p></li>
                                            <li><p>-Web, where I contact an API, and show all the files. User can make a favourite list and a watch list in his profile. </p></li>
                                            <li><p>-This project is still under construction. Currently, I'm reprogramming the API call to obtain more content. Once completed, the ultimate goal is to create a 'social network' where users share movies and make recommendations </p></li>
                                            <li><p>Link to github repository:</p></li>
                                        </ul>

                                        <div className="git-box">
                                            <a href="https://github.com/josepCortesManyanich/Project-1"><img className="button-git" src="https://res.cloudinary.com/josepcortes/image/upload/v1713896520/64e79ca5aff2fb7295bfddf9_github-que-es_vwvfsc.jpg" alt="" /></a>
                                        </div>
                                        <div className="lenguajes"> <p>HTML5</p> <p>CSS3</p> <p>JS</p> <p>REACT</p> <p>MONGO</p> <p>NODE</p></div>
                                    </div>
                               
                        </div>
                        <h3 className="right-swipe">SWIPE RIGHT</h3>   
                        </div>
                    </div>

            
            </SwiperSlide>

            <SwiperSlide>
                            <div className="card">
                            <div className="title-projects"><h2 >SOME THINGS I HAVE BUILT</h2></div>
                            <div className="card-contains">
                                <h3 className="left-swipe">SWIPE LEFT</h3>        
                                    <div className="card-inner">
                                                <div className="card-front">
                                                <img src="https://res.cloudinary.com/josepcortes/image/upload/v1715215592/Captura_desde_2024-05-09_02-46-07_b1xltk.png" alt="" /> 
                                                </div>
                                                <div className="card-back">
                                                    <ul>
                                                        <li className="card-title-back">PERSONAL PORTFOLIO</li>
                                                        <li><p>- My own portfolio </p></li>
                                                        <li><p>- Portfolio, built from scratch. </p></li>
                                                        <li><p>-User, also can see all my personal information, projects, experience and my educational background.</p></li>
                                                        <li><p>Link to github repository:</p></li>
                                                    </ul>

                                                    <div className="git-box">
                                                        <a href="https://github.com/josepCortesManyanich/PROYECTOFRONTEND"><img className="button-git" src="https://res.cloudinary.com/josepcortes/image/upload/v1713896520/64e79ca5aff2fb7295bfddf9_github-que-es_vwvfsc.jpg" alt="" /></a>
                                                    </div>
                                                    <div className="lenguajes"> <p>CSS3</p> <p>JS</p> <p>REACT</p></div>
                                                </div>
                                        </div>
                                    <h3 className="right-swipe">SWIPE RIGHT</h3>  
                                    </div>    

                                </div>
            </SwiperSlide>
            
                          
            <SwiperSlide>
                            <div className="card">
                            <div className="title-projects"><h2 >SOME THINGS I HAVE BUILT</h2></div>
                            <div className="card-contains">
                                <h3 className="left-swipe">SWIPE LEFT</h3>        
                                    <div className="card-inner">
                                                <div className="card-front">
                                                <img src="https://res.cloudinary.com/josepcortes/image/upload/v1713895354/Captura_desde_2024-04-23_19-58-05_mf7gtx.png" alt="" /> 
                                                </div>
                                                <div className="card-back">
                                                    <ul>
                                                        <li className="card-title-back">PURO-IMPACTO FIGHTERS APP</li>
                                                        <li><p>- Project for the third module at Ironhack </p></li>
                                                        <li><p>- Gym App where users can sign up a  training or an event. </p></li>
                                                        <li><p>-User, also can create a training,  and perform the necessary authentications (sign up, log in, log out)</p></li>
                                                        <li><p>Link to github repository:</p></li>
                                                    </ul>

                                                    <div className="git-box">
                                                        <a href="https://github.com/josepCortesManyanich/PROYECTOFRONTEND"><img className="button-git" src="https://res.cloudinary.com/josepcortes/image/upload/v1713896520/64e79ca5aff2fb7295bfddf9_github-que-es_vwvfsc.jpg" alt="" /></a>
                                                    </div>
                                                    <div className="lenguajes"> <p>TAILWIND</p> <p>JS</p> <p>REACT</p> <p>MONGO</p> <p>NODE</p></div>
                                                </div>
                                        </div>
                                    <h3 className="right-swipe">SWIPE RIGHT</h3>  
                                    </div>    

                                </div>
            </SwiperSlide>

            <SwiperSlide>
                            <div className="card">
                               
                                <div className="title-projects"><h2 >SOME THINGS I HAVE BUILT</h2></div>
                                 <div className="card-contains">
                                        <h3 className="left-swipe">SWIPE LEFT</h3>
                                        <div className="card-inner">
                                                <div className="card-front">
                                                <img src="https://res.cloudinary.com/josepcortes/image/upload/v1713897737/Captura_desde_2024-04-23_20-39-34_nycop4.png" alt="" /> 
                                                </div>
                                                <div className="card-back">
                                                    <ul>
                                                        <li className="card-title-back">BRR CBD</li>
                                                        <li><p>- Project for the second module at Ironhack </p></li>
                                                        <li><p>- Builded with my mate Ali. </p></li>
                                                        <li><p>- Online store of CBD.</p></li>
                                                        <li><p>-User is able to buy products from the store, add products to cart and pay at the checkout page with a credit card.</p></li>
                                                        <li><p>Link to github repository:</p></li>
                                                    </ul>

                                                    <div className="git-box">
                                                        <a href="https://github.com/josepCortesManyanich/proyecto2"><img className="button-git" src="https://res.cloudinary.com/josepcortes/image/upload/v1713896520/64e79ca5aff2fb7295bfddf9_github-que-es_vwvfsc.jpg" alt="" /></a>
                                                    </div>
                                                    <div className="lenguajes"> <p>HTML5</p> <p>CSS3</p> <p>JS</p> <p>MONGO</p> <p>NODE</p></div>
                                                </div>
                                        </div>
                                        
                                    <h3 className="right-swipe">SWIPE RIGHT</h3>  
                                    </div>
                                    </div>   
                                
            </SwiperSlide>

            <SwiperSlide>
                            <div className="card">
                                <div className="title-projects"><h2 >SOME THINGS I HAVE BUILT</h2></div>
                                 <div className="card-contains">
                                <h3 className="left-swipe">SWIPE LEFT</h3>    
                                    <div className="card-inner">
                                                <div className="card-front">
                                                <img src="https://res.cloudinary.com/josepcortes/image/upload/v1713904212/Captura_desde_2024-04-23_22-29-54_xggod6.png" alt="" /> 
                                                </div>
                                                <div className="card-back">
                                                    <ul>
                                                        <li className="card-title-back">BRR CBD</li>
                                                        <li><p>- -Personal project. To do list </p></li>
                                                        <li><p>- Improved clasical to do list, about home tasks. And builded with a backend.</p></li>
                                                        <li><p>-In order to make a control with my girlfriend on the home tasks. Can create,delete and update a task</p></li>
                                                        <li><p>Link to github repository:</p></li>
                                                    </ul>

                                                    <div className="git-box">
                                                        <a href="https://github.com/josepCortesManyanich/PROYECTOFRONTEND"><img className="button-git" src="https://res.cloudinary.com/josepcortes/image/upload/v1713896520/64e79ca5aff2fb7295bfddf9_github-que-es_vwvfsc.jpg" alt="" /></a>
                                                    </div>
                                                    <div className="lenguajes"> <p>HTML5</p> <p>CSS3</p> <p>JS</p> <p>MONGO</p> <p>NODE</p></div>
                                                </div>
                                    </div>
                                <h3 className="right-swipe">SWIPE RIGHT</h3>   
                                </div>    
                            </div>
            </SwiperSlide>

            <SwiperSlide>
                            <div className="card">
                                <div className="title-projects"><h2 >SOME THINGS I HAVE BUILT</h2></div>
                                 <div className="card-contains">
                                     <h3 className="left-swipe">SWIPE LEFT</h3>   
                                    <div className="card-inner">
                                                <div className="card-front">
                                                <img src="https://res.cloudinary.com/josepcortes/image/upload/v1713895785/Captura_desde_2024-04-23_20-09-09_wwttu9.png" alt="" /> 
                                                </div>
                                                <div className="card-back">
                                                    <ul>
                                                        <li className="card-title-back">IRON MARIO HACK</li>
                                                        <li><p>- Project for the first module at Ironhack. </p></li>
                                                        <li><p>- Game where Mario will try to survive, and catch all the posible "languajes", and survive to the Bowser's attacks </p></li>
                                                        <li><p>-That game was made with canvas.</p></li>
                                                        <li><p>Link to github repository:</p></li>
                                                    </ul>

                                                    <div className="git-box">
                                                        <a href="https://github.com/josepCortesManyanich/Project-1"><img className="button-git" src="https://res.cloudinary.com/josepcortes/image/upload/v1713896520/64e79ca5aff2fb7295bfddf9_github-que-es_vwvfsc.jpg" alt="" /></a>
                                                    </div>
                                                    <div className="lenguajes"> <p>HTML5</p> <p>CSS3</p> <p>JS</p></div>
                                                </div>
                                    </div>
                                </div>    
                            </div>
            </SwiperSlide>
                          
        </div>

        </Swiper>

    
      </div>  
       

    )
}



export default Projects