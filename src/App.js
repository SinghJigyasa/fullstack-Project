import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Login from './common/login';
import RegisterUser from './common/register';
import MainLayoutComp from './layout/mainLayout';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route element={<MainLayoutComp/>} >
             <Route element={<Login/>} path='/'/>
             <Route element={<RegisterUser/>} path='/register'/>
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
