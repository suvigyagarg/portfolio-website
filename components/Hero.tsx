import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { cn } from '@/lib/utils'
import { TextGenerateEffect } from './ui/text-generate-effect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'


const Hero = () => {
    return (
        <div className='pb-20 pt-36'>
            <div>
                <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white' />
                <Spotlight className='top-10 left-full  h-[80vh] w-[50vw]' fill='purple' />
                <Spotlight className='top-28 left-80  h-[80vh] w-[50vw] ' fill='blue' />
            </div>
            <div className="absolute top-0 left-0 flex h-screen w-full items-center justify-center bg-grid-white/[0.03] bg-black-100">
                <div
                    className={cn(
                        "absolute inset-0",
                        "[background-size:120px_120px]",
                       "[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
                    )}
                />
                {/* Radial gradient for the container to give a faded look */}
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center
                  [mask-image:radial-gradient(ellipse_at_center,transparent_1%,black)] bg-black-100"/>
                    
                

            </div>
            <div className='flex justify-center relative my-20 z-10'>
                <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
                 {/* <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>
                    Dynamic Web Magic with Next.js
                 </h2> */}
                 <TextGenerateEffect
                 className='text-center text-[40px] mx-4 text-white md:text-5xl lg:text-6xl'
                 words='Hi I&apos;m Suvigya Garg, a Software Developer based in India.'
                 />
                 <p className='text-center font-normal text-white md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
                  Hi I&apos;m Suvigya Garg, a Full Stack Developer based in India.
                 </p>
                 <a href='#about'>
                  <MagicButton 
                  title ="Show my work"
                  icon={<FaLocationArrow/>}
                  position='right'
                  />
                 </a>
                </div>

            </div>
        </div>
    )
}

export default Hero