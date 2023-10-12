
import './App.css';
import HomePage from './component/HomePage/HomePage';
import Notes from './component/Notes/Notes';
import Navbar from './component/Navbar/Navbar';

import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/notes" element={<Notes />} />
      </Routes>
    </div>
  );
}

export default App;
