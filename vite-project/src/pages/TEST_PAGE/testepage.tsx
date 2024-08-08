import { Button, useQuery } from "@chakra-ui/react"
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import PrimaryInput from "../../components/Input/PrimaryInput";
import { ChangeEvent, useState } from "react";


const url_api = "http://127.0.0.1:5000/character"
interface TestePageProps {

}


export default function TestePage(props : TestePageProps){
    const [nameChar, setNameChar] = useState("");
    const [page, setPage] = useState(1);

    const navigate = useNavigate()

    const getCharacters = async (url_api_full: RequestInfo | URL) =>{
        const res = await fetch(url_api_full)
        const data = await res.json();

        console.log(data)
    }



    const goToAbout = ()=>{
        const url_params = `?name=${nameChar}&page=${page}`
        const full_url = `${url_api}${url_params}`
        getCharacters(full_url)
    }

    const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) =>{
        setNameChar(event.target.value);        
    }

    

    return(
        <>  
            <h1>Home Page</h1>
            

            <PrimaryInput name={"name of char"} value={nameChar} onChange={handleChangeName} />            

            <Button onClick={goToAbout}> Pesquisar </Button>

        
        </>
    )
}