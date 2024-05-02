import CoreTrack from "@/components/widgets/CoreTrack";
import Hero from "@/components/widgets/Hero";
import SpecializeTrack from "@/components/widgets/SpecializeTrack";
import Image from "next/image";
import Web from '@/components/widgets/Web'







export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <CoreTrack />
        <SpecializeTrack />
        <Web />
     
      
      </main>
    </>
  );
}
