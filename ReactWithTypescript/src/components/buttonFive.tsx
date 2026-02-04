
type ButtonFiveProps<T> = {
  countValue : T,
  countHistory: T[]
}


export default function ButtonFive<T extends React.ReactNode>({countValue, countHistory}: ButtonFiveProps<T>) {
  return (
    <>
    <h1>{countValue}</h1>
    <button >{countHistory.length}</button>
    </>
    
  )
}
