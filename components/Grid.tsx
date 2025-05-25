import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/bento-grid'
import { gridItems } from '@/data'

const Grid = () => {
  return (
    <section id='about'>
     <BentoGrid className='w-full py-20'>
        {gridItems.map((item ,i )=>(
            <BentoGridItem
            id ={item.id}
            key={item.id}
            title={item.title}
            description={item.description}
            className={item.className}
            img={item.img}
            imgClassName = {item.imgClassName}
            titleClassName ={item.titleClassName}
            spareImage ={item.spareImg}
            />
        ))}
     </BentoGrid>
    </section>
  )
}

export default Grid