import { useState } from 'react';
import { Header } from "./Components/Header";
import { KeyboardOperation } from "./Components/KeyboardOperation";
import { InputOperations } from "./Components/InputOperations";

import { ContexOperations } from "./Hooks/ContextOperation";

import "./Assets/css/App.css";

export function App() {

  const [ value, setValue ] = useState(0);

  return (
    <>
      <div></div>
      <div className="calculator">
        <Header />
        <ContexOperations.Provider value={ { value: value, setValue: setValue } } >

          <main className="main-calulator">
            <InputOperations inputNum={ value } /> 
            <KeyboardOperation />
          </main>

        </ContexOperations.Provider>
      </div>
      <div></div>
    </>
  )
}
