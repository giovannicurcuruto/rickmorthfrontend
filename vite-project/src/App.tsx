
import { useState } from 'react'
import './App.css'
import PrimaryInput from './components/Input/PrimaryInput'
import { Button } from '@chakra-ui/react'

function App() {
  const [char, setChar] = useState("")

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
    setChar(event.target.value)
  }

  return (
    <>
      <div className="container">
        <div className="container-form">
          <PrimaryInput            
            value={char} 
            onChange={handleChange} 
            name="character" 
          />
          <Button colorScheme='teal' variant='outline'> Search </Button>
        </div>
      </div>
    </>
  )
}

export default App
