import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './component/Navbar';
import Header from './component/Header';
import About from './component/About';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Skill from './component/Skill';
import Contact from './component/Contact';
import Achievement from './component/Achievement';
import Project from './component/Project';


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/about" element={<About />} />
          <Route path="/skill" element={<Skill/>} />
          <Route path="/project" element={<Project/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/achieve" element={<Achievement/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
