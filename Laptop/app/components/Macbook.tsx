"use client"

const Macbook = () => {
    return (
        <div className='h-50 w-80 perspective-distant group'>
            <div className='h-[92%] bg-white flex items-center justify-center rounded-t-xl border-3 border-b-4 border-neutral-400 -rotate-x-70 group-hover:rotate-x-0 origin-bottom transition-all ease-[cubic-bezier(0.85, 0, 0.15, 1)] duration-600 p-4'>
                <img className="opacity-0 group-hover:opacity-100 transition-all duration-600 ease-[cubic-bezier(0.85, 0, 0.15, 1)]" src="/next.svg" alt="" />
            </div>
            <div className='h-[8%] relative  bg-neutral-200 rounded-b-2xl'>
                <div className='h-[60%] w-18 mx-auto bg-neutral-300 shadow-[0px_1px_0_0px_#e5e5e5,inset_0_2px_4px_rgba(0,0,0,0.2)] rounded-b-4xl'>
                </div>
            </div>
        </div>
    )
}

export default Macbook