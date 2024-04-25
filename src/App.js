import {Routes, Route} from 'react-router-dom'
import './App.css';
import Navbar from './Components/Navbar';
import About from './views/About'
import Home from './views/Home';
import Skills from './views/Skills';
import Footer from './Components/Footer';
import Experience from './views/Experience';
import Contact from './views/Contact';
import { useState } from 'react';
import Toogle from './Components/Toggle';


function App() {
  const[dark , setDark] = useState(true)
  return (
    <div className={`App ${dark ? 'dark-mode' : 'light-mode'}`}>
       
              <Navbar dark={dark}/>
            
              <Routes>
                <Route path ='/' element ={<Home/>}/>
                <Route path ='/About' element ={<About/>}/>
                <Route path ='/Experiencie' element ={<Experience/>}/>
                <Route path ='/Proyects' element ={<About/>}/>
                <Route path ='/Skills' element ={<Skills/>}/>
                <Route path ='/Contact' element ={<Contact/>}/>
              </Routes>

          

        
              <Footer/>
              <Toogle dark={dark} setDark={setDark}/>
        </div>
      
  );
}

export default App;
