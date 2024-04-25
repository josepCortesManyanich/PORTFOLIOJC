
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import About from './views/About';
import Home from './views/Home';
import Skills from './views/Skills';
import Footer from './Components/Footer';
import Experience from './views/Experience';
import Contact from './views/Contact';
import { ThemeProvider } from './Components/ThemeContext' 
import { useContext } from 'react';
import ThemeContext from './Components/ThemeContext'
import Projects from './views/Projects';

function App() {

  const context = useContext(ThemeContext);

  const white = context ? context.white : false  


  return (
    <ThemeProvider> 
      <div className={`App ${white ? 'light-mode' : 'dark-mode'}`}>
        
            <Navbar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/About' element={<About />} />
              <Route path='/Experience' element={<Experience />} />
              <Route path='/Skills' element={<Skills />} />
              <Route path='/Contact' element={<Contact />} />
              <Route path='/Projects' element={<Projects/>}/>
            </Routes>
            <Footer />
        
      </div>
    </ThemeProvider>
  );
}

export default App;
