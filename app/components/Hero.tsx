import Image from 'next/image';
import React from 'react';
import {useEffect, useState} from 'react';
import category from '../data/category';

function Hero({userInput}:any) {
    const [searchInput,setSearchInput]=useState<string>();
  return (
    <div className='text-center'>
      <div>
        <Image src='/beer_city.png' alt='hero-image'
        width={400} height={200}
        className='w-full absolute mt-[-50px] opacity-20'/> 
        <div className='mt-[70px] z-10'>
            <h2 className='text-[55px] text-orange-600 tracking-widest font-semibold'>
                SÖR-TÉRKÉP
            </h2>
            <h2 className='text-[20px]'>
                Sörkereső
            </h2>
            <div className='mt-5 z-20 flex gap-2 items-center justify-center'>
                <input 
                onChange={(e)=>setSearchInput(e.target.value)}
                type="text" 
                placeholder='Keresés...'
                className='z-10
                bg-white p-3 border-[1px] rounded-full px-5 w-[36%] shadow-sm outline-orange-600'
                />
                <button 
                onClick={()=>userInput(searchInput)}
                className='bg-orange-600 rounded-full p-3 shadow-md z-10 cursor-pointer hover:scale-105 transition-all'>
                <svg xmlns="http://www.w3.org/2000/svg" 
                fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
                className="w-6 h-6 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>

                </button>
            </div>
            <div className='mt-5 flex flex-col justify-center items-center'>
                <h2>Vagy válassz sört!</h2>
                <div className='
                grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4
                w-[50%] justify-center gap-5 mt-3
                '>
                    {category.map((item,index)=>(
                        <div key={index} className='
                        border-[1px] w-[75px] p-4 bg-white rounded-full z-10
                        hover:border-orange-600 hover:scale-110 cursor-pointer transition-all'>
                            <Image src={item.icon} alt={item.name}
                            width={50} height={50}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
