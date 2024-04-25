import React from "react"
/*import { useTheme } from '../Components/ThemeContext'*/
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import SwiperCore from 'swiper'
SwiperCore.use([Navigation]);

function Projects  () {

    return(
        <div className="swiper-container">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <div>
            <h2>SOME THINGS I HAVE BUILT</h2>
                
          <SwiperSlide>
                    <div class="card">
                       
                        <div class="card-inner">
                                    <div class="card-front">
                                    <img src="https://res.cloudinary.com/josepcortes/image/upload/v1713903761/Captura_desde_2024-04-23_22-22-14_cy15fe.png" alt="" /> 
                                    </div>
                                    <div class="card-back">
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
                    </div>

            
            </SwiperSlide>
            
                          
          <SwiperSlide>
                            <div class="card">
                                    
                                    <div class="card-inner">
                                                <div class="card-front">
                                                <img src="https://res.cloudinary.com/josepcortes/image/upload/v1713895354/Captura_desde_2024-04-23_19-58-05_mf7gtx.png" alt="" /> 
                                                </div>
                                                <div class="card-back">
                                                    <ul>
                                                        <li className="card-title-back">PURO-IMPACTO FIGHTERS APP</li>
                                                        <li><p>- Project for the third module at Ironhack </p></li>
                                                        <li><p>- Gym App where users can sign up a  training or an event. User, also can create a training,  and perform the necessary authentications (sign up, log in, log out)</p></li>
                                           
                                                        <li><p>Link to github repository:</p></li>
                                                    </ul>

                                                    <div className="git-box">
                                                        <a href="https://github.com/josepCortesManyanich/PROYECTOFRONTEND"><img className="button-git" src="https://res.cloudinary.com/josepcortes/image/upload/v1713896520/64e79ca5aff2fb7295bfddf9_github-que-es_vwvfsc.jpg" alt="" /></a>
                                                    </div>
                                                    <div className="lenguajes"> <p>TAILWIND</p> <p>JS</p> <p>REACT</p> <p>MONGO</p> <p>NODE</p></div>
                                                </div>
                                    </div>
                                </div>
            </SwiperSlide>
                          
          <SwiperSlide><div className='item3'> 
                        <img src="https://res.cloudinary.com/josepcortes/image/upload/v1713903761/Captura_desde_2024-04-23_22-22-14_cy15fe.png" alt="" /> 
                            <ul>
                                
                                <li><p>-Personal project, in order to practise. </p></li>
                                <li><p>-Web, where I contact an API, and show all the files. User can make a favourite list and a watch list in his profile. </p></li>
                                <li><p>Link to github repository:</p></li>
                            </ul>

                            <button> <a href="https://github.com/josepCortesManyanich/Project-1"><img src="https://res.cloudinary.com/josepcortes/image/upload/v1713896520/64e79ca5aff2fb7295bfddf9_github-que-es_vwvfsc.jpg" alt="" /></a></button>
                            <div className='lenguajes'> <p>HTML5</p> <p>CSS3</p> <p>JS</p> <p>REACT</p> <p>MONGO</p> <p>NODE</p></div>
                    </div>
            </SwiperSlide>
                          
          <SwiperSlide><div className='item3'> 
                        <img src="https://res.cloudinary.com/josepcortes/image/upload/v1713903761/Captura_desde_2024-04-23_22-22-14_cy15fe.png" alt="" /> 
                            <ul>
                                
                                <li><p>-Personal project, in order to practise. </p></li>
                                <li><p>-Web, where I contact an API, and show all the files. User can make a favourite list and a watch list in his profile. </p></li>
                                <li><p>Link to github repository:</p></li>
                            </ul>

                            <button> <a href="https://github.com/josepCortesManyanich/Project-1"><img src="https://res.cloudinary.com/josepcortes/image/upload/v1713896520/64e79ca5aff2fb7295bfddf9_github-que-es_vwvfsc.jpg" alt="" /></a></button>
                            <div className='lenguajes'> <p>HTML5</p> <p>CSS3</p> <p>JS</p> <p>REACT</p> <p>MONGO</p> <p>NODE</p></div>
                    </div>
            </SwiperSlide>
                          
          <SwiperSlide><div className='item3'> 
                        <img src="https://res.cloudinary.com/josepcortes/image/upload/v1713903761/Captura_desde_2024-04-23_22-22-14_cy15fe.png" alt="" /> 
                            <ul>
                                
                                <li><p>-Personal project, in order to practise. </p></li>
                                <li><p>-Web, where I contact an API, and show all the files. User can make a favourite list and a watch list in his profile. </p></li>
                                <li><p>Link to github repository:</p></li>
                            </ul>

                            <button> <a href="https://github.com/josepCortesManyanich/Project-1"><img src="https://res.cloudinary.com/josepcortes/image/upload/v1713896520/64e79ca5aff2fb7295bfddf9_github-que-es_vwvfsc.jpg" alt="" /></a></button>
                            <div className='lenguajes'> <p>HTML5</p> <p>CSS3</p> <p>JS</p> <p>REACT</p> <p>MONGO</p> <p>NODE</p></div>
                    </div>
            </SwiperSlide>
                
           
        </div>

        </Swiper>

    
      </div>  
       

    )
}



export default Projects