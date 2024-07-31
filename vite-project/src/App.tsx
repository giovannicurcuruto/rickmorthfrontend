import Logo from './components/Logo/Logo'
import Home from './pages/Home/Home'

import './App.css'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import ResultsPage from './pages/Results/Results'
import LoadingPage from './pages/Loading/Loading'



function App() {
  

  return (
    <div className="container">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/loading' element={<LoadingPage/>}/>
        <Route path='/results' element={<ResultsPage/>} />     
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App


/* <BrowserRouter>
<Route path="/" element={<Home/>} />
<Route path="/Results" element={<ResultsPage/>} />
<Route path='/loading' element={<LoadingPage/>}/>
</BrowserRouter> */