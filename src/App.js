import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Page1 from './components/Page1';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import { BrowserRouter, Routes, Route  } from "react-router-dom";



function App() {
  return (
    <div className="App">

    
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page1/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/header" element={<Header />} />
        <Route path="/resume" element={<Resume/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/portfolio" element={<Portfolio/>} />

      </Routes>
      </BrowserRouter>
     
      
    </div>
  );
}

export default App;
