
import './App.css';
import HomePage from './component/HomePage';
import Navbar from './component/Navbar/Navbar';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
     <Navbar />
     <HomePage />

    </div>
  );
}

export default App;
