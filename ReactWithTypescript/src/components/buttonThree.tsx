type ButtonThreeProps = {
     borderRadius: Record<string, number>  // using Record utility type
     onClick: (test: string) => void // function prop
     children: React.ReactNode // to accept child elements
}
export default function ButtonThree({borderRadius, onClick , children}: ButtonThreeProps) {
  return (
     <button onClick={() => onClick("Test")} className="bg-red-400" style={{borderRadius: `${borderRadius.topLeft}px ${borderRadius.topRight}px ${borderRadius.bottomRight}px ${borderRadius.bottomLeft}px`}}>{children}</button>
  )
}
