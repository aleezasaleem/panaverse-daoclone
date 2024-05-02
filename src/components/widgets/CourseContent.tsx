import Wrapper from '@/components/shared/Wrapper'
import GlobeImage from '/public/globeimg.webp'
import Image from 'next/image'
import Link from 'next/link'

const CourseContent1 = () => {
 
  return (

    <section className='bg-gray-100'>
      <Wrapper>
        <div className='flex flex-col  md:flex-row justify-between items-center  '>
          {/* left */}
          <div className='flex-1 mx-auto mt-6  lg:mt-0'>
            <h1 className='  text_gradient font-extrabold text-4xl lg:text-5xl'>Common In All</h1>
            <h1 className='text-zinc-800 font-extrabold text-5xl lg:text-6xl'>Specializations</h1>
            <p className='text-neutral-700 text-lg mt-8 max-w-screen-sm'>Every participant of the program will start by completing the following three core courses</p>
           <Link href={'https://portal.piaic.org/signup'}> <button className='btn mt-12'>Sign Up</button></Link>
            {/* quarter info */}
           
               
              
          </div>
          {/* right */}
          <div className='flex-1 mt-6 mb-6'>
            <Image src={GlobeImage} alt='globeimage' height={400} width={400} />
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4  '>
        <div className='bg-zinc-200 h-[250px] max-w-screen-sm mt-10 rounded-lg '>
             
             <div  className='px-6 py-4'> 
             <h4 className='text-zinc-800 font-extrabold text-3xl'>Quarter : 1</h4>
            <p className='text-neutral-700 mt-7'>CS-101: Object-Oriented Programming using TypeScript</p>
            <button className='bg-zinc-800 px-4 py-2 text-white mt-7 rounded-lg'>Duration: (13 weeks)</button></div>
            </div>
            {/* 2 */}
            <div className='bg-zinc-200 h-[250px] max-w-screen-sm mt-10 rounded-lg '>
          
          <div  className='px-6 py-4'> 
          <h4 className='text-zinc-800 font-extrabold text-3xl'>Quarter : 2</h4>
         <p className='text-neutral-700 mt-3'>W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform</p>
         <button className='bg-zinc-800 px-4 py-2 text-white mt-4 rounded-lg'>Duration: (13 weeks)</button></div>
         </div>
         {/*  */}
         <div className='bg-zinc-200 h-[250px] max-w-screen-sm mt-10 mb-10 rounded-lg '>
          
          <div  className='px-6 py-4 '> 
          <h4 className='text-zinc-800 font-extrabold text-3xl'>Quarter : 3</h4>
         <p className='text-neutral-700 mt-3'>$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development</p>
         <button className='bg-zinc-800 px-4 py-2 text-white mt-4 rounded-lg'>Duration: (13 weeks)</button></div>
         </div>
         </div>
      </Wrapper>
    </section>
  )
}

export default CourseContent1