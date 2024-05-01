import { GoLinkExternal } from "react-icons/go";
import Wrapper from '@/components/shared/Wrapper'
import Image from 'next/image'
import IImage from '/public/background2.webp'

const Web = () => {
    return (
        <section className='mt-16 md:mt-28'>
            <Wrapper>
                <div className='flex gap-x-8 flex-col md:flex-row items-center'>
                    {/* image */}
                    <div className='flex-1'>
                        <Image src={IImage} alt='image' />
                    </div>
                    {/* content */}
                    <div className='flex-1'>
                        <h2 className='font-extrabold bg-gradient-to-r  from-purple-700 to-purple-700 text-transparent bg-clip-text text-4xl '>The Outcome for Participants of the Program</h2>
                        <p className='mt-4 text-md text-neutral-700'>The graduates of this program will own products (Full-Stack App Templates, AR and VR Experiences, and APIs) that are marketed globally by the Panaverse DAO and, if they like, will also be able to start off by offering services at a rate of $50 per hour ($96,000 per year). This would give Pakistani professionals and students a fantastic opportunity to better their financial situation while also giving the economy a much-needed boost by expanding software exports.</p>
                        <ul className="mt-6 font-medium text-neutral-700">
                            <li className="flex items-center  gap-x-3"><GoLinkExternal className="text-neutral-700" /> Top 5 Metaverse jobs that will rule the future of tech industry</li>
                            <li className="flex items-center mt-2  gap-x-3"><GoLinkExternal className="text-neutral-700" />Blockchain Developer Salary - Jun 2022</li>
                            <li className="flex items-center mt-2  gap-x-3"><GoLinkExternal className="text-neutral-700" />Web3 Salaries Soar to $750,000 for Rank-and-File Devs</li>
                            <li className="flex items-center mt-2  gap-x-3"><GoLinkExternal className="text-neutral-700" />The Metaverse, Blockchain Gaming, and NFTs: Navigating the Internet Uncharted Waters</li>
                            <li className="flex items-center mt-2 gap-x-3"><GoLinkExternal className="text-neutral-700" />How To Become Metaverse Developer: Scope, Skills, and Salary</li>
                        
                        </ul>
                    </div>
                </div>
            </Wrapper>
        </section>
    )
}

export default Web