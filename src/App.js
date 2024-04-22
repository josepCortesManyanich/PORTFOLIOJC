import {Routes, Route} from 'react-router-dom'
import './App.css';
import Navbar from './Components/Navbar';
import About from './views/About'
import Home from './views/Home';


function App() {
  return (
    <div className='App'>
          <div className="Layout">
              <Navbar/>
            
              <Routes>
                <Route path ='/' element ={<Home/>}/>
                <Route path ='/About' element ={<About/>}/>
                <Route path ='/Experiencia' element ={<About/>}/>
                <Route path ='/Proyectos' element ={<About/>}/>
                <Route path ='/Habilidades' element ={<About/>}/>
              </Routes>
        
        
        
        </div>
        </div>
  );
}

export default App;
