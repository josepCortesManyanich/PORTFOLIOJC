import {Routes, Route} from 'react-router-dom'
import './App.css';
import Navbar from './Components/Navbar';
import About from './views/About'
import Home from './views/Home';
import Skills from './views/Skills';
import Footer from './Components/Footer';
import Experience from './views/Experience';


function App() {
  return (
    <div className='App'>
         
              <Navbar/>
            
              <Routes>
                <Route path ='/' element ={<Home/>}/>
                <Route path ='/About' element ={<About/>}/>
                <Route path ='/Experiencie' element ={<Experience/>}/>
                <Route path ='/Proyects' element ={<About/>}/>
                <Route path ='/Skills' element ={<Skills/>}/>
              </Routes>

          

        
              <Footer/>
        </div>
      
  );
}

export default App;
