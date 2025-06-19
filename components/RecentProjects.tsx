import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/PinContainer'
import { FaLocationArrow } from 'react-icons/fa6'

const RecentProjects = () => {
  return (
    <div className='text-white py-24 ' id='projects'>
        <h1 className='text-2xl md:text-4xl font-bold text-center mb-10 font-mono tracking-tight'>
           A small selection of {' '}
            <span className='text-purple-400 text-5xl tracking-normal'>Recent Projects</span> 
        </h1>
        <div className='flex flex-wrap items-center justify-center gap-x-24 gap-y-8 p-4 mt-10'>
        {projects.map(({
            id,
            title,
            img,
            des,
            iconLists,
            link,
        }) => (
            <div key={id} className='sm:h-[41rem] h-[32rem] lg:min-h[32.5rem] flex items-center justify-center
             sm:w-[576px] w-[80vw]'>
             <PinContainer title={link} href={link} >
               <div className='relative flex items-center justify-center sm:w-[570px] w-[80vw] sm:h-[40vh] h-[30vh]
                overflow-hidden  mb-10'>
                <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]'>
                    <img src='/bg.png' alt= "bg-img"/>
                </div>
                <img
                src={img}
                alt={title}
                className='z-10 absolute bottom-0'
                />
               </div>
               <h1 className='lg:text-2xl md:text-xl text-base line-clamp-1 font-bold tracking-tight'>
                {title}
               </h1>
               <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2'>
                {des}
               </p>
               <div className='flex items-center justify-between mt-7 mb-3'>
                 <div className='flex items-center '>
                     {iconLists.map((icon,index) => (
                        <div key={icon} className='border border-white/20 rounded-full
                         bg-black lg:w-10
                        lg:h-10 w-8 h-8 flex justify-center items-center'
                        style={{
                           transform: `translateX(-${5*index*2}px)`
                        }}
                        >
                        <img
                        src={icon}
                        alt={icon}
                        className='p-2'
                        />
                        </div>
                     ))}

                 </div>
                 <div className='flex justify-center items-center'>
                    <p className='flex lg:text-xl md:text-xs text-sm text-purple-400'>Checkout the project</p>
                    <FaLocationArrow className='ms-3 color-[#CBACF9]'/>
                    </div>
               </div>
             </PinContainer>
            </div>
        ))}
        
    
        </div>
    </div>
  )
}

export default RecentProjects