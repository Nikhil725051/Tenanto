import logo from './logo.svg';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Welcome from './pages/Welcome';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/welcome' element={<Welcome></Welcome>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
