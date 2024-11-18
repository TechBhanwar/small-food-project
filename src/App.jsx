import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Cart from './Pages/Cart';



const App = () => {
 
  return (
    <div>
  
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
       <Route path='/about' element={<About />}></Route>
       <Route path='/contact' element={<Contact />}></Route>
       <Route path='/cart' element={<Cart />}></Route>
     

  
      </Routes>

      
      </BrowserRouter>
   
    </div>
  );
}

export default App;