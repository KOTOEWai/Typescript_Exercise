import { useEffect } from "react";

const buttonTextOptions = [
    "Click me",
    "Click me too",
    "Click me again"
] as const ; // readonly array of button text options

type User = {
    sessionId: string;
    name:string;
}

type Guest = Omit<User,"name"> // extract name property from User type
type ButtonColor = "red" | "green" | "blue"



export default function Test() {
    useEffect(() => {
        const previousButtonColor =  localStorage.getItem("buttonColor") as ButtonColor; // previous button color  is red or green or blue 
    },[])
  return (
   <button>
    {
      buttonTextOptions.map((option) => {
        return option;
      })
    }
   </button>
  )
}
