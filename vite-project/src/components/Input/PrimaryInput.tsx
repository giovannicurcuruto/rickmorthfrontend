import { Input } from "@chakra-ui/react";
import { ChangeEventHandler } from "react";

import "./primaryInput.css";

interface PrimaryInputProps {
    name: string,
    value: string,
    onChange: ChangeEventHandler<HTMLInputElement>

}
export default function PrimaryInput({ name, value, onChange} : PrimaryInputProps){
    return(
        
        <div className="input-container">
            <Input variant='filled'
                placeholder='Search characters'
                name={name}
                value={value}
                onChange={onChange} />
        </div>
        
    )
}