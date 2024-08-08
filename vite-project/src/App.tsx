import Logo from './components/Logo/Logo'
import Home from './pages/Home/Home'

import './App.css'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import ResultsPage from './pages/Results/Results'
import TestePage from './pages/TEST_PAGE/testepage'





function App() {
  

  return (
    <div className="container">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/testpage' element={<TestePage />} />
        <Route path='/results' element={<ResultsPage/>} />     
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App

