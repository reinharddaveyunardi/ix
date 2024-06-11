'use client'
import '../app/styles.css';
import Skeleton from '@mui/material/Skeleton';
import { useState, useEffect } from 'react';

type Props = {
  logo: string;
  title: string;
  homeroom: string;
  hof: string;
  vice: string;
};

export default function ClassBox({ logo, title, homeroom, hof, vice }: Props) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [logo, title, homeroom, hof, vice]);

  return (
    <div className="rounded-2xl min-w-[350px] max-w-[450px] inline-block border bg-black/20 backdrop-blur-sm border-white p-4 sm:p-8 text-white duration-500 transition-colors w-[345px] sm:w-[420px]">
      <div className="flex flex-col justify-center items-center">
        {loading ? (
          <Skeleton variant="rectangular" width={210} height={118} />
        ) : (
          <img src={logo} className="w-full sm:max-w-[350px] max-w-[500px] rounded-2xl" alt="logo" />
        )}
      </div>
      <div className='flex items-center justify-center pb-4'>
        <div className='flex items-center gap-2'>
          <div className='sm:w-10 sm:block hidden h-[1.5px] bg-white'/>
            <p>✧⁠ |</p>
          </div>
          <h1 className='text-center sm:text-2xl text-sm font-bold px-4'>{title}</h1>
          <div className='flex items-center gap-2'>
            <p>| ✧⁠</p>
          <div className='sm:w-10 sm:block hidden h-[1.5px] bg-white'/>
        </div>
      </div>
      <div className="text-start">
        <p className="mt-2 sm:text-base text-sm font-sans font-thin">{loading ? <Skeleton variant="text" width={150} /> : homeroom}</p>
        <p className="mt-2 sm:text-base text-sm font-sans font-thin">{loading ? <Skeleton variant="text" width={150} /> : hof}</p>
        <p className="mt-2 sm:text-base text-sm font-sans font-thin">{loading ? <Skeleton variant="text" width={150} /> : vice}</p>
      </div>
    </div>
  );
}
