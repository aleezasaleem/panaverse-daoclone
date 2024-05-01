import Wrapper from '@/components/shared/Wrapper'
import Image from 'next/image'
import IImage from '/public/background.webp'
import Link from 'next/link'
import { HiOutlineExternalLink } from "react-icons/hi";
import Button from '@/components/shared/Button';

const Hero = () => {

  return (
   <section>
       <Wrapper>
        <div className=''>
        <div className='flex flex-col md:flex-row  items-center'>
          {/* left side */}
          <div className=' flex-1' >
            <h4 className='text-teal-700  font-semibold mt-6 lg:mt-0'>Presidential Initiative for Artificial Intelligence and Computing (PIAIC)</h4>
            <h1 className='text-4xl sm:text-5xl font-bold leading-[55px]'>Certified Web 3.0 and Metaverse Developer</h1>
            <p className='mt-6 text-xl max-w-[510px] text-neutral-700'>A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the Internet. 
</p>
<p className='text-xl text-neutral-700 mt-4 max-w-[510px]'> Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, Ambient Computing/IoT, Network Automation, and Bioinformatics Technologies</p>
<div className='mt-2'>
  <Link href={'https://portal.piaic.org/signup'}>
<Button text='Apply Now'/>
</Link>
</div>
          </div>
          {/* right side */}
          <div className=' flex-1'>
            <Image src={IImage} alt='panaverse'/> 
          </div>
        </div>
        </div>
   </Wrapper>
   </section>
  
  )
}

export default Hero