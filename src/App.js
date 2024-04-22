import {Routes, Route} from 'react-router-dom'
import './App.css';
import Navbar from './Components/Navbar';
import About from './views/About'


function App() {
  return (
    <div className="App">
      <Navbar/>
    
      <Routes>
        <Route path ='/' element ={<About/>}/>
        <Route path ='/About' element ={<About/>}/>
        <Route path ='/Experiencia' element ={<About/>}/>
        <Route path ='/Proyectos' element ={<About/>}/>
        <Route path ='/Habilidades' element ={<About/>}/>
      </Routes>
    
    
    
    </div>
  );
}

export default App;
