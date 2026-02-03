import type { JSX } from "react/jsx-dev-runtime"

type Buttonpros = {
    style : React.CSSProperties  // using React.CSSProperties for style prop
    children?: JSX.Element  // optional children prop
    setCount: React.Dispatch<React.SetStateAction<number | string>> // optional setCount prop
}


export default function buttonTwo({style, children, setCount}: Buttonpros) {
  return (
    <div>
      <button  style={style} onClick={() => setCount(prev => typeof prev === 'number' ? prev + 1 : 1)}>{children}</button>
    </div>
  )
}
