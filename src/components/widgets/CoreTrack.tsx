
import Wrapper from '@/components/shared/Wrapper'
import Button from '@/components/shared/Button'
import Link from 'next/link'



const CoreHeader = [{
  text: "Quarter 1",
  desc: "CS-101: Object-Oriented Programming using TypeScript",
  number: 1
}, {
  text: "Quarter 2",
  desc: "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
  number: 2
}, {
  text: "Quarter 3",
  desc: "$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development",
  number: 3
}

]

const CoreTrack = () => {
  
  const header = 'Core Course \n (Common in All Specialisation):'
  return (
    <section className='mt-16 lg:mt-28 '>
      <Wrapper>
        {/* <div className='w-64 h-64 backdrop-blur-lg opacity-45 rounded-full bg-teal-800'> </div> */}
        <div className='max-w-screen-sm'>
          <h4 className='text-teal-700  font-semibold mt-6 lg:mt-0'>Program of Studies</h4>
          <h2 className='text-4xl  font-bold leading-[55px] whitespace-pre-line'>{header}</h2>
          <p className='mt-6 text-xl max-w-[510px] text-neutral-700'>Every participant of the program will start by completing the following
            three core courses
          </p>

          <div className='mt-4'>
            <Link href={'https://www.piaic.org/'}>
              <Button text='learn More' />
            </Link>
          </div>
        </div>
        {/* boxes */}
        <div className='my-20 flex gap-4  flex-col md:flex-row'>
        <Link href={'CourseContent'}> <div className='mt-6 flex flex-col lg:flex-row  items-stretch gap-x-8 gap-y-6 '>
            {CoreHeader.map((item, i) => {
              return (

                <div  className='border rounded-lg cursor-pointer px-8 py-16 relative flex-1 flex flex-col justify-center hover:scale-105
              bg-gradient-to-r from-pink-200 z-20 to-gray-300 hover:bg-gradient-to-r hover:from-pink-300 hover:to-purple-200' key={item.number}>
                  <h4 className='font-bold text-lg'>{item.text}</h4>
                  <p className='mt-2 text-neutral-700 z-0'>{item.desc}</p>
                  <div className='absolute text-slate-200 -top-8 right-10 text-[170px] -z-10 font-bold'>{i + 1}</div>
                </div>
             

              )
            })}
           
          </div>
           </Link>

        </div>
      </Wrapper>

    </section>
  )
}

export default CoreTrack