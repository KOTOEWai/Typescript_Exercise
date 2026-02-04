

{/*type ButtonFourProps = {
    type: "button" | "submit" | "reset",
    autoFocus: boolean
}

type imageProps = React.ComponentProps<"img">  // Using ComponentProps to inherit img props
type inputProps = React.ComponentProps<"input">  // Using ComponentProps to inherit input props

*/}
type ButtonFourProps = React.ComponentPropsWithoutRef<"button"> & { // intersecting with custom props
    className: string;
    type: "button" | "submit" | "reset",
    autoFocus: boolean,
    size?: number
}  // Using ComponentProps to inherit button props


export default function ButtonFour({type, autoFocus , className , ...rest}: ButtonFourProps ) {  // rest operator to collect remaining props
  return (
   <button className={className} {...rest} type={type} autoFocus={autoFocus}></button>
  )
}
