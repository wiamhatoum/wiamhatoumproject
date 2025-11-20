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
      <Router>
        <NavBar /> 
        
        <Routes>

       
          <Route path ="/"  exact Component={Home}/>
          <Route path ="/menu"  exact Component={Menu}/>
          <Route path ="/about"  exact Component={About}/>
          <Route path ="/contact"  exact Component={Contact}/>
          <Route path ="/feedback"  exact Component={Feedback}/>
            
         </Routes>
        
        <Footer />
        </Router>  
    </div>

  
  );
}

export default App;
