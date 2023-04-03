import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Aboutme from './pages/Aboutme';
import Certifications from './pages/Certifications';
import Contactme from './pages/Contactme';
import Experience from './pages/Experience';
import Hobbies from './pages/Hobbies';
import Projects from './pages/Projects';
import Qualifications from './pages/Qualifications';
import Skills from './pages/Skills';
import Workshops from './pages/Workshops';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Navbar/>
       <Routes>
       <Route path="Aboutme" element={<Aboutme/>}/>
       <Route path="Certifications" element={<Certifications/>}/>
       <Route path="Contactme" element={<Contactme/>}/>
       <Route path="Experience" element={<Experience/>}/>
       <Route path="Hobbies" element={<Hobbies/>}/>
       <Route path="Projects" element={<Projects/>}/>
       <Route path="Qualifications" element={<Qualifications/>}/>
       <Route path="Skills" element={<Skills/>}/>
       <Route path="Workshops" element={<Workshops/>}/>

       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
