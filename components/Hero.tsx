import React from 'react'
import { cn } from '@/lib/utils'
import { Spotlight } from './ui/Spotlight'
import { socials } from '@/data'
import { FaLocationDot } from 'react-icons/fa6';
import { FloatingDock } from './ui/floating-dock';
import { HoverBorderGradient } from './ui/hover-border-gradient';


const accent = 'text-purple-400';

const Hero = () => {
    return (
        <div className='py-20' id='home'>
         
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
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_1%,black)] bg-black-100" />
            </div>
            {/* <div className='absolute top-20 left-100 z-0'>
            <HoverBorderGradient
            containerClassName='rounded-full '>
                 <span className='text-white font-bold'>Looking for roles in Frontend and Backend</span>
            </HoverBorderGradient>
         </div> */}
            <div className='flex justify-start relative my-20 z-10'>
                <div className='w-full md:w-5/8 px-6 md:px-16 flex flex-col gap-6'>
                    <span className={cn('font-mono text-purple-400 mb-2 text-[30px]')}>
                        {'<span>'} Hey, I&apos;m Suvigya {'</span>'}
                    </span>
                    <h1 className="font-mono text-8xl  font-bold text-white leading-tight">
                        A<span className="text-purple-800">{' {Software}'}</span>
                        <br /> Developer
                        <span className={'text-purple-800 animate-blink'}>_</span>
                    </h1>
                    <p className={cn('max-w-2xl  text-base md:text-lg lg:text-2xl font-mono text-neutral-400')}>
                        <span className={accent}>{'<p>'} </span>
                        With over 3 years of experience in writing<span className={accent}> Javascript </span> and more recenntly  <span className={accent}> GO</span>.
                        Have Worked with frameworks like
                        <span className={accent}> React </span>,
                        <span className={accent}> Next.js </span>,
                        <span className={accent}> Express.js </span>, and
                        <span className={accent}> Expo </span>...
                        I like to work on both Frontend and Backend.
                        <span className={accent}>{'<p> '}</span>
                    </p>
                    {/* Add where you are based at */}
                    {/* <span className='flex items-center text-purple-400 font-mono'><FaLocationDot className=' mr-2 text-white'/>
                    Delhi, India</span> */}
                    <div className="flex items-center gap-4 ">
                        <div>
                            <FloatingDock
                                items={socials.map((s) => ({
                                    title: s.alt,
                                    icon: <img src={s.src} alt={s.alt} className="h-12 w-12" />,
                                    href: s.href,
                                }))}
                                desktopClassName="bg-transparent shadow-none px-0 pb-0"
                                mobileClassName="bg-transparent shadow-none"
                            />
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Hero