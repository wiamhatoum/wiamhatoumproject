import logo from './logo.svg';


import './App.css';
import NavBar from './components/NavBar.js';
import Menu from './pages/Menu.js';
import Contact from './pages/Contact.js';
import About from './pages/About.js';
import Home from './pages/Home.js';
import Footer from './components/Footer.js';
import Feedback from './pages/feedback.js';
import { BrowserRouter as Router, Routes,  Route } from 'react-router-dom'; 

function App() {
  return (
    
     
      <div className="App">
      
        <NavBar /> 
        
        <Routes>

       
          <Route path ="/"  element={<Home/>}/>
          <Route path ="/menu"  element={<Menu/>}/>
          <Route path ="/about"  element={<About/>}/>
          <Route path ="/contact"  element={<Contact/>}/>
          <Route path ="/feedback"  element={<Feedback/>}/>
            
         </Routes>
        
        <Footer />
        
    </div>

  
  );
}

export default App;
