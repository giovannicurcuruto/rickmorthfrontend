import { useEffect, useState } from 'react'
import PrimaryInput from '../../components/Input/PrimaryInput'
import { Button } from '@chakra-ui/react'
import CardChar from '../../components/Cards/CardChar'

import './home.css'
import Logo from '../../components/Logo/Logo'


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

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        setChar(event.target.value)
    }

    const getCharacters = async (url_api: RequestInfo | URL) =>{
        const res = await fetch(url_api)
        const data = await res.json();

        console.log(data);
        

        const charData: CharData = {
            img_url_p: data["image"],
            name_char_p: data["name"],
            race_char_p: data["species"]
        };

        setCharacters([charData]);       
    }

    useEffect( () => {
        const url_find = `${url_api}find/1`;
        getCharacters(url_find);
    },[])

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
                    <Button colorScheme='teal' variant='outline'> Search </Button>
                    
                    {characters.map((character, index)=>(
                        <CardChar
                        key={index} 
                        img_url={character.img_url_p} 
                        name_char={character.name_char_p} 
                        race_char={character.race_char_p}   /> 
                    ))}            '
                </div>
            </div>



        </>
    )
}