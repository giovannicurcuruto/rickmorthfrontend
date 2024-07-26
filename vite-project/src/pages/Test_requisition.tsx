import {useState, useEffect } from 'react';

//Apenas usado para fins de teste e comunicação com o Backend
const url_api = "http://127.0.0.1:5000/character/"
//const url_characters_api = "127.0.0.1:5000/character/"

interface TestRequisitionProps {

}
export default function TestRequisition(props : TestRequisitionProps){
    const [ characters, setCharacters] = useState([])

    const getCharacters = async (url_api: RequestInfo | URL) =>{
        const res = await fetch(url_api)
        const data = await res.json();

        console.log(data);
    }

    useEffect( () => {
        const url_find = `${url_api}find/2`;
        //console.log(url_find);
        getCharacters(url_find);
    },[])


    return(
        <></>
    )
}