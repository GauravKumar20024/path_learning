import React from 'react'
import "./App.css"
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Footer from './components/Footer'
import Learn from './pages/Learn'
import Practice from './pages/Practice'
import MockTest from './pages/MockTest'
import ProgressReport from './pages/ProgressReport'

const App = () => {
  return (
    <BrowserRouter basename='/path_learning/'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/learn' element={<Learn/>}/>
        <Route path='/practice' element={<Practice/>}/>
        <Route path='/mock_test' element={<MockTest/>}/>
        <Route path='/progress_report' element={<ProgressReport/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
