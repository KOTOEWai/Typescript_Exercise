
import { useState } from 'react'
import './App.css'
import Button from './components/buttonTwo'

function App() {
 {/*  const handleClick = (test: string) => {
    console.log('Button clicked!', test)
  }
    */}

   const  [ count, setCount] = useState<number | string>(10)
  
  return (
    <div>
      <h1 className='text-3xl bg-red-500'>Hello Vite + React!{count}</h1>
      <p>Click on the Vite and React logos to learn more</p>
     {/* <Button label='ClickMeKoKo' bgColor='red' padding={[44,44]}/>*/}
     
      <Button setCount={setCount} style={{backgroundColor:'blue', color:'white', padding:'10px 20px', borderRadius:'5px'}}><h1>ClickMeKoKo</h1></Button>

      {/*
      <Button
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
      </Button>
      */}
    </div>
  )
}

export default App
