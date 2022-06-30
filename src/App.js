import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import CompletedTasks from './components/Home/CompletedTasks';
import ToDo from './components/Home/ToDo';
import Calender from './components/Home/Calender';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/completedtasks' element={<CompletedTasks></CompletedTasks>}></Route>
        <Route path='/todo' element={<ToDo></ToDo>}></Route>
        <Route path='/calender' element={<Calender></Calender>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
