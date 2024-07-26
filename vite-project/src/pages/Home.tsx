import { useEffect, useState } from 'react'
import PrimaryInput from '../components/Input/PrimaryInput'
import { Button } from '@chakra-ui/react'

const url_api = "http://127.0.0.1:5000/character/"

interface HomeProps {

}
export default function Home(props : HomeProps){

    const [ char, setChar] = useState("")
    const [ characters, setCharacters] = useState([])

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        setChar(event.target.value)
    }

    const getCharacters = async (url_api: RequestInfo | URL) =>{
        const res = await fetch(url_api)
        const data = await res.json();

        console.log(data);
    }

    useEffect( () => {
        const url_find = `${url_api}find/2`;
        getCharacters(url_find);
    },[])

    return(
        <>
            <PrimaryInput            
                value={char} 
                onChange={handleChange} 
                name="character" />
            <Button colorScheme='teal' variant='outline'> Search </Button>
        </>
    )
}