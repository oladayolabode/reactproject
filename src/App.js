import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Contact from './Contact/Contact';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>      
    </div>
  );
}

export default App;
