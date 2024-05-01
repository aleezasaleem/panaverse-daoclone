"use client"
import Link from 'next/link'
import logo from '/public/logo.png'
import Image from 'next/image'
import Wrapper from '@/components/shared/Wrapper'
import { headers } from 'next/headers'
import { FaAngleDown } from "react-icons/fa6"
import React from 'react'
import {
    Cloud,
    CreditCard,
    Github,
    Keyboard,
    LifeBuoy,
    LogOut,
    Mail,
    MessageSquare,
    Plus,
    PlusCircle,
    Settings,
    User,
    UserPlus,
    Users,
  } from "lucide-react"
  
  import { Button } from "@/components/ui/button"
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
    
  } from "@/components/ui/dropdown-menu"

   
const Header = () => {
    return (
        <header className='sticky top-0 bg-[#ffffff9d] backdrop-blur-xl z-10'>
        <Wrapper>
        <div className="flex justify-between items-center py-3  
         border-b">
            <div>
                <Image src={logo} alt='logo' width={90} />
                {/* <h1 className="text-xl font-bold">Panaverse Dao</h1> */}

            </div>
            <ul className="flex space-x-8 font-medium">
                <Link href={'/'}> 
                <li>Home</li>
                </Link>
               
               <Link href={'/'}  > 
                
              
       
               <DropdownMenu>
        <DropdownMenuTrigger asChild>
        <li className='flex items-center gap-x-2'>Track  < FaAngleDown/>
                </li>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-96 bg-[#ffffff9d] backdrop-blur-xl mx-10 ">
      
          <DropdownMenuSeparator />
          <DropdownMenuGroup >
          
            <div className='flex flex-col gap-y-2 text-neutral-700 '>
              <span className='hover:bg-gray-200 hover:w-full hover:py-1 cursor-pointer px-4 '>Web 3 and Metaverse</span>
              <span className='hover:bg-gray-200 cursor-pointer  hover:w-full hover:py-1  px-4 '>Cloud-Native Computing</span>
              <span className='hover:bg-gray-200 cursor-pointer  hover:w-full hover:py-1  px-4 '>Artificial Intelligence (AI) and Deep Learning</span>
              <span className='hover:bg-gray-200 cursor-pointer  hover:w-full hover:py-1  px-4 '>Ambient Computing and IoT</span>
              <span className='hover:bg-gray-200 cursor-pointer  hover:w-full hover:py-1  px-4'>Genomics and Bioinformatics</span>
              <span className='hover:bg-gray-200 cursor-pointer  hover:w-full hover:py-1  px-4'>Network Programmability and Automation</span>
              </div> 
        
           
           
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
           
            <DropdownMenuSub>
             
              <DropdownMenuPortal>
          
              </DropdownMenuPortal>
            </DropdownMenuSub>
           
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
        
         
          
          <DropdownMenuSeparator />
         
        </DropdownMenuContent>
      </DropdownMenu>
           </Link>

         
            </ul>
        </div>
        </Wrapper>
        </header>
    )
}

export default Header