import Logo from './components/Logo/Logo'
import Home from './pages/Home'

import './App.css'



function App() {
  

  return (
    <>
      <div className="container">
        <div className="logo-container">
          <Logo/>     
        </div> 
        <div className="container-form">          
          <Home />
          
        </div>
        
      </div>
    </>
  )
}

export default App
