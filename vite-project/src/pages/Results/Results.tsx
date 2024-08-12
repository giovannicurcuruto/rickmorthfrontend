import { ChangeEvent, useEffect, useState } from "react";
import PrimaryInput from "../../components/Input/PrimaryInput";
import { Button, Grid, GridItem } from "@chakra-ui/react";
import Logo from "../../components/Logo/Logo";

import './Results.css';
import CardChar from "../../components/Cards/CardChar";
import { useNavigate } from "react-router-dom";
import PaginationComponent from "../../components/Pagination/pagination";

const url_api = "http://127.0.0.1:5000/character/"

interface ResultsPageProps {
}

interface CharData{
    img_url_p: string;
    name_char_p: string;
    race_char_p: string;
}
export default function ResultsPage(props : ResultsPageProps){

    const [char, setChar] = useState("")
    const [ characters, setCharacters] = useState<CharData[]>([])

    const [page, setPage] = useState(1);
    const [total_pages, setTotalPages] = useState(0);

    const navigate = useNavigate();

    

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        setChar(event.target.value)
    }

    const getCharacters = async (url_api: RequestInfo | URL) =>{
        const res = await fetch(url_api);
        const data = await res.json();       

        const charDataX: CharData[] = data['data'].map((char:any) => ({
            img_url_p: char['image'],
            name_char_p: char['name'],
            race_char_p: char['species']
        }))        

        console.log(data['total_pages'])
        setTotalPages(data['total_pages'])
        setCharacters(charDataX);
    }

    const handleClick = () =>{
        const full_url = `${url_api}?page=${page}&name=${char}`; 

        getCharacters(full_url);
        navigate(`?page=${page}&name=${char}`);

        
    }

    const handlePageChange = (page: number) =>{
        setPage(page)
    }

    const handleTotalPages = (data: number) =>{
        return data
    }

    


    return(
        <>
            <div className="container">
                <div className="logo-container">
                    <Logo/>
                </div>
                <div className="container-form">
                    <PrimaryInput 
                        name={"character"} 
                        value={char} 
                        onChange={handleChange} />
                    <Button colorScheme='teal'
                        variant='outline'
                        onClick={handleClick} > Search </Button>
                </div>
                <div className="grid-teste">

                    <Grid templateColumns='repeat(3,1fr)' templateRows='repeat(2, 1fr)' gap={8}>
                        {characters.map((character, index)=>(                                                    
                                <CardChar
                                    key={index} 
                                    img_url={character.img_url_p} 
                                    name_char={character.name_char_p} 
                                    race_char={character.race_char_p}   />                        
                        ))} 
                    </Grid>
                    <PaginationComponent currentPage={page} totalPages={total_pages} onPageChange={handlePageChange}/>
                </div>
                

                
            </div>
                   
        
        </>
    )
}