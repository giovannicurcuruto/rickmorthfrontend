import { useEffect, useState } from 'react'
import PrimaryInput from '../../components/Input/PrimaryInput'
import { Button } from '@chakra-ui/react'
import CardChar from '../../components/Cards/CardChar'

import './home.css'
import Logo from '../../components/Logo/Logo'
import { useNavigate } from 'react-router-dom'


const url_api = "http://127.0.0.1:5000/character/"

interface HomeProps {

}

interface CharData{
    img_url_p: string;
    name_char_p: string;
    race_char_p: string;
}
export default function Home(props : HomeProps){

    const [ char, setChar] = useState("")
    const [ characters, setCharacters] = useState<CharData[]>([])

    const [page, setPage] = useState(1);

    const navigate = useNavigate();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        setChar(event.target.value)
    }
   

    const getCharacters = async (url_api_full: RequestInfo | URL) =>{
        const res = await fetch(url_api_full)
        const data = await res.json();

        console.log(data);
        

        const charData: CharData = {
            img_url_p: data["image"],
            name_char_p: data["name"],
            race_char_p: data["species"]
        };

        setCharacters([charData]);       
    }

    const handleClick = () => {
        const url_params = `?name=${char}&page${page}`
        const full_url = `${url_api}${url_params}`
        getCharacters(full_url)
        navigate(url_params)
        
    }


    return(
        <>
            <div className="container">
                <div className="logo-container">
                    <Logo/>
                </div>
                <div className="container-form">                    
                    <PrimaryInput            
                        value={char} 
                        onChange={handleChange} 
                        name="character" />
                    <Button 
                        colorScheme='teal' 
                        variant='outline'
                        onClick={handleClick}
                        > Search </Button>

                </div>
            </div>
        </>
    )
}