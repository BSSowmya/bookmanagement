import './App.css';
import { Route,Routes } from 'react-router-dom';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import Dashboard from './components/dashboard/Dashboard';
import Addbook from './components/book/Addbook';
import Updatebook from './components/book/Updatebook';

function App() {
  return (
    <>
    <Routes>
    <Route path='/' element={<Login/>}></Route>
    <Route path='/signup' element={<Signup/>}></Route>
    <Route path='/dashboard' element={<Dashboard/>}></Route>
    <Route path='/addbook' element={<Addbook/>}></Route>
    <Route path='/updatebook' element={<Updatebook/>}></Route>
    </Routes>
  
    {/* <Signup></Signup> */}
    </>
  );
}

export default App;
