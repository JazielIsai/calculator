import React, { useContext } from "react";
import { ContexOperations } from "../Hooks/ContextOperation";

import Button from './Button';

export const KeyboardNumeric = () => {
    const { value, setValue } = useContext(ContexOperations)

    const handleOnClick = (e) => {
       setValue(value + e.target.value)
    }
    
    const arrayNum = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    
    return (
    <div className="teclado-calculator">
        {
            arrayNum.map( num => {
                return(
                    <Button 
                        key={num}
                        numero = { num }
                        handleClick = { handleOnClick }
                    />
                )
            })

        }
    </div>
  )
}
