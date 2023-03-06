import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './LoginForm';
import Signup from './Signup';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/LoginForm' element={<Login/>}/>
      <Route path='/Signup' element={<Signup/>}/>

    </Routes>
  </BrowserRouter>
   
  </React.StrictMode>
);


