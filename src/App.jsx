import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import CuerpoMovil from './components/cuerpo/CuerpoMovil';
import Practicas from './components/practicas/Practicas';
import AuthLayout from './components/layouts/AuthLayout';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';



function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<AuthLayout />}>
          <Route index element={<CuerpoMovil />} />
          <Route path='projects' element={<Projects />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='blog' element={<Blog />} />
        </Route>
         
       
        </Routes>        
         
     </BrowserRouter>
    </>
  )
}

export default App
