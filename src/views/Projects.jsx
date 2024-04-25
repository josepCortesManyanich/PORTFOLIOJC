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
            <h2>SOME THINGS I'VE BUILT</h2>
                
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