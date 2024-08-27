/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Portfolio from './pages/portfolio/Portfolio'
import Login from './pages/login/Login'



function App() {


  return (
    
  <>
  <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />

          <Route path="/login" element={<Login />} />

          <Route path="*" element={<div>Esto debe ser una pagina 404</div>} />
      </Routes>
  </BrowserRouter>
  </>
  )
}

export default App
