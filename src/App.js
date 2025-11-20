import logo from './logo.svg';


import './App.css';
import NavBar from './components/NavBar';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import About from './pages/About';
import Home from './pages/Home';
import Footer from './components/Footer';
import Feedback from './pages/feedback';
import {BrowserRouter as Router , Routes , Route, BrowserRouter, HashRouter } from 'react-router-dom'; 

function App() {
  return (
    
     
      <div className="App">
      
        <NavBar /> 
        <HashRouter>
        <Routes>
          <Route path ="/"  element={<Home/>}/>
          <Route path ="/menu"  element={<Menu />}/>
          <Route path ="/about"  element={<About />}/>
          <Route path ="/contact"  element={<Contact />}/>
          <Route path ="/Feedback"  element={<Feedback />}/>
            
        </Routes>
        </HashRouter>  
        <Footer />
        
    </div>

  
  );
}

export default App;
