import Container from '@/components/Container'
import { cn } from '@/lib/utils';
import React from 'react'

const page = () => {
  return (
    <Container className='h-screen w-full relative [--pattern:var(--color-neutral-300)]'>
      <div className=' max-w-[1200px] w-full h-full flex items-center justify-center relative mx-auto'>
        <YLine className='absolute top-0  w-full h-14' />
        <YLine className='absolute bottom-0 w-full h-14' />
        <XLine className='absolute  left-0 w-14 h-screen' />
        <XLine className='absolute right-0 w-14 h-screen' />

        <div className='p-14 size-full '>
          <div className='relative py-14 px-4 size-full flex flex-col justify-between '>
            <img src="https://assets.aceternity.com/components/mountains-snow.webp" alt="snow" className='-z-99 w-full h-full object-cover absolute inset-0 mask-t-from-90% mask-b-from-10% mask-radial-from-50%' />
            <nav className='flex items-center justify-between '>
              <span className='font-bold  text-neutral-800 text-3xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-700'>Acme</span>
              <div className='flex items-center gap-6 text-sm text-neutral-500'>
                <a href='#' className='hover:text-neutral-800 transition-colors'>Docs</a>
                <a href='#' className='hover:text-neutral-800 transition-colors'>Blog</a>
                <a href='#' className='hover:text-neutral-800 transition-colors'>Pricing</a>
              </div>
              <a href='#' className='text-sm bg-gradient-to-t from-blue-700 to-blue-500 text-white drop-shadow-xl text-shadow-xs   px-4 py-1.5 rounded-md hover:bg-neutral-700 transition-colors hover:bg-gradient-to-t hover:from-blue-700 hover:to-blue-300'>Get started</a>
            </nav>

            <div className='flex flex-col gap-2 justify-start'>
              <h1 className=' tracking-tight text-neutral-950 text-6xl -z-999 font-medium max-w-xl'>The only AI capable of deep cloning voice</h1>
              <p className='tracking-tight text-neutral-500 text-xl max-w-md '>
                Pass in a URL, and Deepclone AI will clone the voice of the person in the same format
              </p>

              <div className="buttons flex gap-2 mt-4">
                <a href="#" className='px-4 py-2 rounded-md bg-gradient-to-t from-blue-700 to-blue-500 text-white text-shadow-lg text-shadow-black/2 text-md hover:bg-gradient-to-t hover:from-blue-700 hover:to-blue-300 transition-colors duration-300 easeIn'>Try for free</a>
                <a href="#" className='px-2 py-2 rounded-md  text-neutral-700 hover:text-neutral-950 text-shadow-lg text-shadow-black/2 text-md'>Read documentation</a>
              </div>
            </div>


            <StraighLines className="h-12 w-full absolute top-0 inset-x-0 mask-b-from-10%" />
            <StraighLines className="h-12 w-full absolute bottom-0 inset-x-0 mask-t-from-10%" />
          </div>
        </div>

      </div>

    </Container>
  );
};

const YLine = ({ className }: { className: string }) => {
  return (
    <div className={cn('border-neutral-300 border-y-1 bg-[repeating-linear-gradient(315deg,var(--pattern)_0%,var(--pattern)_1px,transparent_1px,transparent_50%)] bg-[size:10px_10px]', className)}></div>
  )
}

const XLine = ({ className }: { className: string }) => {
  return (
    <div className={cn('border-neutral-300 border-x-1 bg-[repeating-linear-gradient(315deg,var(--pattern)_0%,var(--pattern)_1px,transparent_1px,transparent_50%)] bg-[size:10px_10px]', className)}></div>
  )
}

const StraighLines = ({ className }: { className: string }) => {
  return (
    <div className={cn('border-neutral-300 border-x-1 bg-[repeating-linear-gradient(to_bottom,var(--pattern)_0%,var(--pattern)_1px,transparent_1px,transparent_1rem)] bg-[size:10px_10px]', className)}></div>
  )
}

export default page;