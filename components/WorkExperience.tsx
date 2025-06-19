'use client';
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { companies } from '@/data';

const accent = 'text-purple-400';



export default function WorkExperience() {
  const [selected, setSelected] = useState(0);
  const company = companies[selected];

  return (
    <section className="w-full flex flex-col items-center justify-center py-12 " id='experiences'>
      <div className="font-mono md:text-5xl font-bold text-white mb-10 text-center">
        <span className="text-purple-400 text-[32px] ">• Experience</span>
        <h2 className='pt-10 pb-10'>My Work Experience</h2>
      </div>
      <div className="flex flex-col md:flex-row gap-8 items-start justify-center w-full">
        {/* Left: Companies List */}
        <div className="w-full md:w-1/3 max-w-[90vw] flex flex-col gap-4">
          {companies.map((c, i) => (
            <button
              key={c.name}
              onClick={() => setSelected(i)}
              className={cn(
                'flex items-center gap-4 px-6 py-4 rounded-2xl border border-neutral-800 bg-black-100 transition-all',
                selected === i ? 'border-purple-400 bg-black-200' : 'hover:border-purple-400',
                'text-left focus:outline-none'
              )}
            >
              <img src={c.logo} alt={c.name} className="h-12 w-12 object-contain" />
              <div className='pl-2'>
                <div className=" text-2xl font-bold text-white pb-1 line-clamp-1">{c.name}</div>
                <div className={cn('font-semibold text-lg line-clamp-1 text-neutral-400')}>{c.years}</div>
              </div>
            </button>
          ))}
        </div>
        {/* Right: Details */}
        <div className="w-full md:w-2/3 max-w-[80vw] border border-neutral-800 rounded-2xl p-8 bg-black-100 min-h-[340px] flex flex-col">
          <div className={cn('font-mono text-2xl md:text-4xl font-bold mb-6 text-purple-400')}>
            {company.title}
          </div>
          <ul className="mb-10 space-y-4 text-white font-mono text-lg md:text-2xl">
            {company.about.map((line, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className={cn('text-purple-400 text-1xl mt-1')}>•</span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-3 mt-auto">
            {company.skills.map((skill) => (
              <span key={skill} className="px-3 py-1 rounded-md border border-neutral-800 bg-black-200 font-semibold text-purple-300 font-mono text-base ">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 