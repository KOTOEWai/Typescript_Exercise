type Color = "red" | "blue" | "green" // union type
type Buttonpros = {
     label: string
     bgColor: Color // using custom type
     fontsize?: number //optional prop
     padding: [number, number] //tuple type

}

const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    console.log('Button clicked!')
  }
  const handleChange = (e: React.ChangeEvent<HTMLButtonElement>) => {
    console.log('Button changed!', e.target.value)
  }

export default function Button({label,bgColor,fontsize,padding}: Buttonpros) {
  return (
    <div>
        <button onClick={handleClick} onChange={handleChange} className={`bg-${bgColor}-500 text-white px-4 py-2 rounded `} style={{fontSize: fontsize , padding: `${padding[0]}px ${padding[1]}px`}}>{label}</button>
    </div>
  )
}
