import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/home' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/contact' element={<Contact />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
