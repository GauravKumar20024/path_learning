import React from 'react'
import "./App.css"
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Footer from './components/Footer'

const App = () => {
  return (
    <BrowserRouter basename='/path_learning'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/learn' element={<Dashboard/>}/>
        <Route path='/practice' element={<Dashboard/>}/>
        <Route path='/mock_test' element={<Dashboard/>}/>
        <Route path='/progress_report' element={<Dashboard/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
