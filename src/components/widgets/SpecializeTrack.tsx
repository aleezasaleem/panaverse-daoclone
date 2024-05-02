'use client'
import Wrapper from "@/components/shared/Wrapper"
import { FaLongArrowAltRight } from "react-icons/fa";
import Quarterbox from "@/components/shared/Quarterbox";
import Image from "next/image";
import Metaimage from '/public/metaverse.webp'
import Ai from '/public/ai.webp'
import Cloud from '/public/cloud.webp'
import network from '/public/network.webp'
import { useState } from "react";
import geneomic from '/public/genomics.webp'
import ambient from '/public/ambient.webp'
import Link from "next/link";
export const data=[{
    slug:"wmd",
    header:"Web 3.0 (Blockchain) and Metaverse Specialization",
    desc:"This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.",
    image:Metaimage,
    Quarters:[
        {
            header:"Quarter 4",
            desc:"W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps",
            number:4
        },
        {
            header:"Quarter 5",
            desc:"MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences",
            number:5
        }
    ]
},
{
    slug:"ai",
    header:"Artificial Intelligence (AI) and Deep Learning Specialization",
    desc:"The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models",
    image:Ai,
    Quarters:[
        {
            header:"Quarter 4",
            desc:"AI-351: Developing Planet-Scale Intelligent APIs and Python Programming",
            number:4
        },
        {
            header:"Quarter 5",
            desc:"AI-361: Deep Learning and MLOps",
            number:5
        }
    ]
},
{
    slug:"cloud",
    header:"Cloud-Native Computing Specialization",
    desc:"The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes. ",
    image:Cloud,
    Quarters:[
        {
            header:"Quarter 4",
            desc:"CN-351: Certified Kubernetes Application Developer (CKAD)",
            number:4
        },
        {
            header:"Quarter 5",
            desc:"CN-361: Developing Multi-Cloud Apps using CDK for Terraform",
            number:5
        }
    ]
},
{
    slug:"ambient",
    header:"Ambient Computing and IoT Specialization",
    desc:"The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter Protocol, and Embedded Devices.",
    image: ambient,
    Quarters:[
        {
            header:"Quarter 4",
            desc:"AC-351: Ambient Computing with Voice Assistants and Matter Devices",
            number:4
        },
        {
            header:"Quarter 5",
            desc:"AC-361: Embedded Programming using C and Rust",
            number:5
        }
    ]
},
{
    slug:"geneomic",
    header:"Genomics and Bioinformatics Specialization",
    desc:"Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved; bioinformatics encompasses a diverse range of analytical methods and tools applied to genomic data. This Specialization focuses on performing complex bioinformatics analysis using the most essential Python libraries and applications.",
    image: geneomic,
    Quarters:[
        {
            header:"Quarter 4",
            desc:"Bio-351: Python for Biologists",
            number:4
        },
        {
            header:"Quarter 5",
            desc:"Bio-361: Bioinformatics with Python",
            number:5
        }
    ]
},
{
    slug:"network",
    header:"Network Programmability and Automation Specialization",
    desc:"More than ever, network engineers are finding it challenging to complete their duties entirely manually. Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile. This course teaches network engineers how to automate systems with code using a variety of technologies and tools, including Linux, Python, APIs, and Git.",
    image: network,
    Quarters:[
        {
            header:"Quarter 4",
            desc:"NPA-351: CCNA 200-301 Certification4",
            number:4
        },
        {
            header:"Quarter 5",
            desc:"NPA-361: Network Programmability and Automation",
            number:5
        }
    ]
}
]

const SpecializeTrack = () => {
    const [selecteditem,setSelecteditem]=useState('wmd')
    const selecteditemdata= data.find((item)=>item.slug=== selecteditem)
  
    return (
        <section>
            <Wrapper>
                {/* header */}<div>
                  <div className='flex gap-2'>
                        <h1 className='text-4xl md:text-5xl font-extrabold text_gradient'>Specialized </h1>
                        <h1 className='text-4xl md:text-5xl font-extrabold text-zinc-800'>Tracks</h1>
                    </div>
                    <p className="mt-6 text-xl max-w-screen-sm text-neutral-700">After completing the first three quarters the participants will select one or more specializations consisting of two courses each</p></div>
                <div className="flex mt-10 gap-x-6 gap-y-8 flex-col-reverse md:flex-row">
                    {/* left content */}

                    <div className="bg-white basis-8/12 self-start sticky top-36  shadow-xl border rounded-xl border-slate-300 py-8 px-6 ">
                        <h4 className="text-teal-700  font-medium mt-6 lg:mt-0">
                            Specialized Track
                        </h4>
                        <h2 className="font-bold text-zinc-800 text-2xl">{selecteditemdata?.header}</h2>
                        <p className="text-lg mt-3 text-neutral-700">{selecteditemdata?.desc}</p>
                       <Link href={'https://www.piaic.org/'}> <button className="text-xl mt-4 px-2 text-teal-700 border hover:scale-105 border-teal-900 flex py-3 gap-x-2 items-center">Learn More
                            <FaLongArrowAltRight className="text-lg hover:scale-105" />
                        </button></Link>
                        <div className="mt-6  flex flex-col lg:flex-row  items-stretch gap-x-8 gap-y-6">
                            {selecteditemdata?.Quarters.map((item,i)=>(
                                 <Quarterbox key={i} header={item.header} desc={item.desc}
                                  number={item.number} haveborder={false}
                                    />
                                 
                            ))}
                       
</div>
                    </div>
                    {/* right content */}
                    <div className="px-4 py-6 flex flex-col space-y-4  basis-4/12">
                    
                        {data.map((item,i)=>(
                              
                             <div onClick={()=>setSelecteditem(item.slug)} className="flex     gap-x-4 cursor-pointer items-center " key={item.slug}>
                             <div className="flex-shrink-0 h-24 w-36">
                             <Image src={item.image} alt={item.header}  className="h-24 object-cover rounded-md hover:scale-105"/>
                              </div>
                              <div>
                                  <h4 className="text-teal-700 font-medium">Specialized Track</h4>
                                  <h3 className="font-bold text-[15px] ">{item.header}</h3>
                                 </div>
                              </div>
                           
                          
                        
                       ) )}
                         
                      
                     
                      
                       </div> 
                    </div>

              
            </Wrapper>
        </section>
    )
}

export default SpecializeTrack