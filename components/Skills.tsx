import React from 'react';
import { cn } from '@/lib/utils';
import { skills, skillSvgs } from '@/data';


const Skills = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center pb-12 pt-6" id='projects'>
      <div className="font-mono md:text-5xl font-bold text-white mb-10 text-center">
        <span className="text-purple-400 text-[32px] ">• Projects</span>
        <h2 className='pt-10'>My Skills</h2>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full">
        
        {/* Left: SVGs */}
        <div className="bg-black-100 border border-neutral-800 rounded-2xl p-8 flex flex-wrap justify-center items-center gap-8 w-full md:w-1/2 max-w-1/2">
          {skillSvgs.map((icon) => (
            <img
              key={icon.alt}
              src={icon.src}
              alt={icon.alt}
              className="h-24 w-26 object-contain"
              draggable="false"
            />
          ))}
        </div>

        {/* Right: Skills List */}
        <div className="w-full md:w-1/2 max-w-1/2 border border-neutral-800 rounded-2xl p-8 bg-black-100 relative overflow-visible">
          <ul className="space-y-12 text-[26px] font-mono relative">
            {skills.map((skill, idx) => (
              <li key={idx} className={cn('relative text-neutral-400')}> 
                <span className={cn( 'text-white absolute -left-10 top-1/2 -translate-y-1/2 text-4xl z-10')}>•</span>
                <span className="text-white">{skill.label}</span> {skill.value}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills; 