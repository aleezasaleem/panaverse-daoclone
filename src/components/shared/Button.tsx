import { FC } from "react"

const Button:FC<{text:string}> = ({text}) => {
  return (
    <button className="btn hover:scale-105">{text}</button>
  )
}

export default Button