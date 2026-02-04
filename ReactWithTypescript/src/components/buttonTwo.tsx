import type { JSX } from "react/jsx-dev-runtime"

type Buttonpros = {
    style : React.CSSProperties  // using React.CSSProperties for style prop
    children?: JSX.Element  // optional children prop
    setCount: React.Dispatch<React.SetStateAction<number | string>> // optional setCount prop
    type: "button" | "submit" | "reset" // type prop
    autoFocus?: boolean // optional autoFocus prop
}


export default function ButtonTwo({style, children, setCount , type, autoFocus}: Buttonpros) {
  return (
    <div>
      <button  type={type} autoFocus={autoFocus} style={style} onClick={() => setCount(prev => typeof prev === 'number' ? prev + 1 : 1)}>{children}</button>
    </div>
  )
}
