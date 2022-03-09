import React, { useContext } from 'react'
import Button from './Button';
import { KeyboardNumeric } from './KeyboardNumeric';

import { ContexOperations } from '../Hooks/ContextOperation';


export const KeyboardOperation = () => {

  const { value, setValue } = useContext(ContexOperations);

  const actions = ['AC', 'C', '='];
  const operations = ['+', '-', '*', '/'];

  return (
    <>
      {/* <InputOperations inputNum={ value }  /> */}
      <div className='Keyboard'>

        <div className="actions">
          {
            actions.map(action => {
              return (
                <Button
                  key={action}
                  numero={action}
                  handleClick={ 
                    action === "AC" ? (e) => { setValue('') } :
                    action === "C" ? () => { setValue( value.substr(0, value.length - 1) )  } :
                    (e) => {
                      try{
                        setValue(
                          String(eval(value)).length > 3 &&
                            String(eval(value)).includes('.')
                            ? String(eval(value).toFixed(4))
                            : String(eval(value))
                        );
                      }catch(e){
                        console.log(e)
                      } 
                    }        
                }
                />
              )
            })
          }
        </div>

        <KeyboardNumeric />

        <div className="operation">
          {
            operations.map(els => {
              return (
                <Button
                  key={els}
                  numero={els}
                  handleClick = { (e) => setValue( value + e.target.value )}
                />
              )
            })
          }
        </div>

      </div>
    </>
  )
}
