import { FC } from "react"

interface Iprops{
  header:string,
  desc:string,
  number:number,
  haveborder?:boolean
}

const Quarterbox:FC<Iprops> = ({header,desc,number,haveborder=true}) => {
  return (
    <div className={` rounded-md  cursor-pointer px-8 py-16 relative flex-1 flex flex-col justify-center ${haveborder && "border"}`} >
                <h4 className='font-bold text-lg'>{header}</h4>
                <p className='mt-2 text-neutral-700 z-10'>{desc}</p>
            
                <div className='absolute text-gray-200 -top-6 right-10 text-[170px]  font-bold'>{number}</div>
               
              </div>
  )
}

export default Quarterbox