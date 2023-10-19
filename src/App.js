
import './App.css';
import HomePage from './component/Homepage/HomePage';
import Navbar from './component/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Notes from './component/Notes/Notes';
import ToDo from './component/ToDo/ToDo';
import RightSideBar from './component/RightSideBar/RightSideBar';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/todo" element={<ToDo />} />
      </Routes>
    </div>
  );
}
export default App;
