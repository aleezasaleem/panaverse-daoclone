import React from 'react'
import Wrapper from '../shared/Wrapper'

import Link from 'next/link';
import { FaFacebookF, FaGithub, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer>

            <div className='flex  items-start justify-between mt-28 bg-slate-200'>
                <div className='mt-10 mb-20 mx-auto flex flex-col gap-x-10 gap-y-2 text-neutral-700 md:flex-row'>
                    {/* left */}
                    <div className='flex flex-col'>
                        <h4 className='text-xl font-semibold'>Compulsory Courses</h4>
                        <a href="CourseContent" className='mt-4   cursor-pointer'>
                            Quarter 1 : CS-101: Object-Oriented Programming us....
                        </a>
                        <a href="CourseContent" className='mt-2 cursor-pointer'>
                            Quarter 2 : W2-201: Developing Planet-Scale Web....
                        </a>
                        <a href="CourseContent" className='mt-2 cursor-pointer'>
                            Quarter 1 : CS-101: Object-Oriented Programming us....
                        </a>
                    </div>
                    {/* between */}
                    <div className='flex flex-col md:mt-0 mt-6'>
                        <h4 className='text-xl font-semibold'>Specialization Tracks</h4>
                        <a href="#" className='mt-4  cursor-pointer'>
                            Web 3 and Metaverse
                        </a>
                        <a href="#" className='mt-2 cursor-pointer'>
                            Cloud-Native Computing
                        </a>
                        <a href="#" className='mt-2 cursor-pointer'>
                            Artificial Intelligence (AI) and Deep Learning
                        </a>
                        <a href="#" className='mt-2 cursor-pointer'>
                            Ambient Computing and IoT
                        </a>
                        <a href="#" className='mt-2 cursor-pointer'>
                            Genomics and Bioinformatics
                        </a>
                        <a href="#" className='mt-2 cursor-pointer'>
                            Network Programmability and Automation
                        </a>
                    </div>
                    {/* right */}
                    <div className='text-zinc-800'>
                        <h1 className='font-bold text-xl'>Social Links</h1>
                        <div className='mt-5 flex gap-3  md:text-sm'>
                            <Link href={'https://www.facebook.com/groups/panaverse'} className='w-10 h-10 bg-[#D46A8E] rounded-full flex justify-center items-center text-white'>
                                <FaFacebookF size={16} />
                            </Link>
                            <Link href={'https://twitter.com/Panaverse_edu'} className='w-10 h-10 bg-[#D46A8E] rounded-full flex justify-center items-center text-white'>
                                <FaTwitter size={16} />
                            </Link>
                            <Link href={'https://www.youtube.com/@panaverse/streams'} className='w-10 h-10 bg-[#D46A8E] rounded-full flex justify-center items-center text-white'>
                                <FaYoutube size={16} />
                            </Link>
                            <Link href={'https://github.com/panaverse'} className='w-10 h-10 bg-[#D46A8E] rounded-full flex justify-center items-center text-white'>
                                <FaGithub size={18} />
                            </Link>
                        </div>
                    </div>
                </div>


            </div>

        </footer>
    )
}

export default Footer