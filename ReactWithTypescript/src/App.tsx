
import { useState } from 'react'

import './App.css'
import ButtonFour from './components/buttonFour'
import ButtonThree from './components/buttonThree'
import ButtonTwo from './components/buttonTwo'
import Button from './components/button'
import ButtonFive from './components/buttonFive'

function App() {
  
  const handleClick = (test: string) => {
    console.log('Button clicked!', test)
  }
  

 const  [ count, setCount] = useState<number | string>(10)
  
  return (
    <div>
      <h1 className='text-3xl bg-red-500'>Hello Vite + React!{count}</h1>
      <p>Click on the Vite and React logos to learn more</p>
  
     
     <Button label='ClickMeKoKo' bgColor='red' padding={[44,44]}/>
    
     <ButtonTwo  type="submit" autoFocus={true}  setCount={setCount}
      style={{backgroundColor:'blue', 
      color:'white',
      padding:'10px 20px',
      borderRadius:'5px'}}>
      <h1>ClickMeKoKo</h1>
    </ButtonTwo>
     
    <ButtonThree
      onClick={() => handleClick('test')}
      borderRadius = {
        {
          topLeft: 50,
          topRight: 50,
          bottomLeft: 30,
          bottomRight: 40
        }
      } >
        Click Me KOOKO
    </ButtonThree>
      
    <ButtonFour className='bg-red-400'  type="submit" autoFocus defaultValue="test" about='this is' />
     
    <ButtonFive<number> countValue={5} countHistory={[1,2,3,4,5]} />




    </div>
  )
}

export default App
