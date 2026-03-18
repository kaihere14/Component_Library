'use client'
import { Monitor, Moon, Play, RotateCcw, SkipBack, SkipForward, Sun, SunDim, Volume, Volume1, Volume2, Keyboard as KeyboardIcon, VolumeX, Delete, Circle, Search, Mic, CornerDownLeft, ArrowUp, ArrowDown, ArrowLeft, ArrowRight, Globe } from 'lucide-react'
import { useCallback } from 'react'


const Keyboard = () => {
    const playClick = useCallback(() => {
        const audio = new Audio('/click.mp3')
        audio.volume = 0.5
        audio.play()
    }, [])
    const row1 = [

        { main: 'f1', sub: <SunDim /> },        
        { main: 'f2', sub: <Sun /> },            
        { main: 'f3', sub: <Monitor /> },       
        { main: 'f4', sub: <Search /> },         

        { main: 'f5', sub: <Mic /> },   
        { main: 'f6', sub: <Moon /> },       

        { main: 'f7', sub: <SkipBack /> },      
        { main: 'f8', sub: <Play /> },          
        { main: 'f9', sub: <SkipForward /> },   

        { main: 'f10', sub: <VolumeX /> },      
        { main: 'f11', sub: <Volume1 /> },      
        { main: 'f12', sub: <Volume2 /> },
        { main: '', sub: <Circle /> },     
        // volume up
    ]
    const row2 = [
        { main: '`', sub: '~' },

        { main: '1', sub: '!' },
        { main: '2', sub: '@' },
        { main: '3', sub: '#' },
        { main: '4', sub: '$' },
        { main: '5', sub: '%' },
        { main: '6', sub: '^' },
        { main: '7', sub: '&' },
        { main: '8', sub: '*' },
        { main: '9', sub: '(' },
        { main: '0', sub: ')' },

        { main: '-', sub: '_' },
        { main: '=', sub: '+' },
    ];

    const row3 = [

        { main: 'Q', sub: null },
        { main: 'W', sub: null },
        { main: 'E', sub: null },
        { main: 'R', sub: null },
        { main: 'T', sub: null },
        { main: 'Y', sub: null },
        { main: 'U', sub: null },
        { main: 'I', sub: null },
        { main: 'O', sub: null },
        { main: 'P', sub: null },

        { main: '[', sub: '{' },
        { main: ']', sub: '}' },

        { main: '\\', sub: '|' },
    ];
    const row4 = [

        { main: 'a', sub: null },
        { main: 's', sub: null },
        { main: 'd', sub: null },
        { main: 'f', sub: null },
        { main: 'g', sub: null },
        { main: 'h', sub: null },
        { main: 'j', sub: null },
        { main: 'k', sub: null },
        { main: 'l', sub: null },

        { main: ';', sub: ':' },
        { main: "'", sub: '"' },

    ];

    const row5 = [


  { main: 'z', sub: null },
  { main: 'x', sub: null },
  { main: 'c', sub: null },
  { main: 'v', sub: null },
  { main: 'b', sub: null },
  { main: 'n', sub: null },
  { main: 'm', sub: null },

  { main: ',', sub: '<' },
  { main: '.', sub: '>' },
  { main: '/', sub: '?' },
];

const row6_1 = [
  { main: <Globe height={15}/>, sub: "fn" },
  { main: 'control', sub: "⌃" },
  { main: 'option', sub: '⌥' },
  { main: 'command', sub: '⌘' },

]
const row6_2=[
  { main: 'command', sub: '⌘' },
  { main: 'option', sub: '⌥' },
];

    return (
        <div className='w-fit h-fit rounded-2xl bg-neutral-800 flex flex-col p-2 gap-2'>
            <div className='flex gap-2'>
                <div onMouseDown={playClick} className='h-10 w-20 drop-shadow-sm  drop-shadow-gray-200  border-b-1 border-white/60 active:border-0  transition duration-1000 bg-black text-white flex flex-col items-start justify-end rounded-md pl-2 cursor-pointer select-none'>
                    <span className='scale-50 '></span>
                    <span className='text-[12px]'>esc</span>
                </div>
                {row1.map((data, idx) => {
                    return <div key={idx} onMouseDown={playClick} className='h-10 w-10 drop-shadow-sm drop-shadow-gray-200  border-b-1 border-white/60 active:border-0  transition duration-1000 bg-black text-white flex flex-col items-center justify-center rounded-md p-4 cursor-pointer select-none'>
                        <span className='scale-50 '>{data.sub}</span>
                        <span className='text-[12px]'>{data.main}</span>
                    </div>
                })}
            </div>
            <div className='flex gap-2 w-full'>
                {row2.map((data, idx) => {
                    return <div key={idx} onMouseDown={playClick} className='h-10 w-10 flex-1 drop-shadow-sm drop-shadow-gray-200  border-b-1 border-white/60 active:border-0  transition duration-1000 bg-black text-white flex flex-col items-center justify-center rounded-md p-4 cursor-pointer select-none'>
                        <span className='scale-50 '>{data.sub}</span>
                        <span className='text-[12px]'>{data.main}</span>
                    </div>
                })}
                <div onMouseDown={playClick} className='h-10 w-20 drop-shadow-sm drop-shadow-gray-200  border-b-1 border-white/60 active:border-0  transition duration-1000 bg-black text-white flex flex-col items-end justify-end rounded-md pr-2 cursor-pointer select-none'>
                    <span className='scale-50 '><Delete size={14} /> </span>
                    <span className='text-[12px]'>delete</span>
                </div>
            </div>


            <div className='flex gap-2 w-full'>
                <div onMouseDown={playClick} className='h-10 w-15 drop-shadow-sm drop-shadow-gray-200  border-b-1 border-white/60 active:border-0  transition duration-1000 bg-black text-white flex flex-col items-start justify-end rounded-md pl-2 cursor-pointer select-none'>
                    <span className='scale-50 '></span>
                    <span className='text-[12px]'>tab</span>
                </div>
                {row3.map((data, idx) => {
                    return <div key={idx} onMouseDown={playClick} className='h-10 w-10 flex-1 drop-shadow-sm drop-shadow-gray-200  border-b-1 border-white/60 active:border-0  transition duration-1000 bg-black text-white flex flex-col items-center justify-center rounded-md p-4 cursor-pointer select-none'>
                        <span className='scale-50 '>{data.sub}</span>
                        <span className='text-[12px]'>{data.main}</span>
                    </div>
                })}

            </div>

            <div className='flex gap-2 w-full'>
                <div onMouseDown={playClick} className='h-10 w-20 drop-shadow-sm drop-shadow-gray-200  border-b-1 border-white/60 active:border-0  transition duration-1000 bg-black text-white flex flex-col items-start justify-end rounded-md pl-2 cursor-pointer select-none'>
                        <span className='scale-50 '></span>
                        <span className='text-[12px]'>caps lock</span>
                    </div>
                {row4.map((data, idx) => {


                    return <div key={idx} onMouseDown={playClick} className='h-10 w-10 flex-1 drop-shadow-sm drop-shadow-gray-200  border-b-1 border-white/60 active:border-0  transition duration-1000 bg-black text-white flex flex-col items-center justify-center rounded-md p-4 cursor-pointer select-none'>
                        <span className='scale-50 '>{data.sub}</span>
                        <span className='text-[12px]'>{data.main}</span>
                    </div>
                })}


                <div onMouseDown={playClick} className='h-10 w-22 drop-shadow-sm drop-shadow-gray-200  border-b-1 border-white/60 active:border-0  transition duration-1000 bg-black text-white flex flex-col items-end justify-end rounded-md pr-2 cursor-pointer select-none'>
                    <span className='scale-50 '></span>
                    <span className='text-[12px]'>return</span>
                </div>

            </div>


            <div className='flex gap-2 w-full'>
                <div onMouseDown={playClick} className='h-10 w-26 drop-shadow-sm drop-shadow-gray-200  border-b-1 border-white/60 active:border-0  transition duration-1000 bg-black text-white flex flex-col items-start justify-end rounded-md pl-2 cursor-pointer select-none'>
                        <span className='scale-50 '></span>
                        <span className='text-[12px]'>shift</span>
                    </div>
                {row5.map((data, idx) => {


                    return <div key={idx} onMouseDown={playClick} className='h-10 w-10 flex-1 drop-shadow-sm drop-shadow-gray-200  border-b-1 border-white/60 active:border-0  transition duration-1000 bg-black text-white flex flex-col items-center justify-center rounded-md p-4 cursor-pointer select-none'>
                        <span className='scale-50 '>{data.sub}</span>
                        <span className='text-[12px]'>{data.main}</span>
                    </div>
                })}


                <div onMouseDown={playClick} className='h-10 w-26 drop-shadow-sm drop-shadow-gray-200  border-b-1 border-white/60 active:border-0  transition duration-1000 bg-black text-white flex flex-col items-end justify-end rounded-md pr-2 cursor-pointer select-none'>
                    <span className='scale-50 '></span>
                    <span className='text-[12px]'>shift</span>
                </div>

            </div>


            <div className='flex gap-2 w-full items-end'>
                
                {row6_1.map((data, idx) => {
                    return <div key={idx} onMouseDown={playClick} className='h-10 w-10 flex-1 drop-shadow-sm drop-shadow-gray-200 border-b-1 border-white/60 active:border-0 transition duration-1000 bg-black text-white flex flex-col items-center justify-center rounded-md pr-1 cursor-pointer select-none'>
                        <span className='scale-90 self-end'>{data.sub}</span>
                        <span className='text-[10px]'>{data.main}</span>
                    </div>
                })}

                <div onMouseDown={playClick} className='h-10 min-w-60 flex-1 drop-shadow-sm drop-shadow-gray-200 border-b-1 border-white/60 active:border-0 transition duration-1000 bg-black text-white flex flex-col items-center justify-center rounded-md p-4 cursor-pointer select-none'>
                    <span className='scale-50'></span>
                    <span className='text-[12px]'></span>
                </div>

                {row6_2.map((data, idx) => {
                    return <div key={idx} onMouseDown={playClick} className='h-10 w-10 flex-1 drop-shadow-sm drop-shadow-gray-200 border-b-1 border-white/60 active:border-0 transition duration-1000 bg-black text-white flex flex-col items-center justify-center rounded-md pl-1 cursor-pointer select-none'>
                        <span className='scale-90 self-start '>{data.sub}</span>
                        <span className='text-[10px] text-center'>{data.main}</span>
                    </div>
                })}


                <div className='flex flex-col gap-[2px]'>

                    <div className='flex justify-center'>
                        <div onMouseDown={playClick} className='h-[19px] w-10 drop-shadow-sm drop-shadow-gray-200 border-b-1 border-white/60 active:border-0 transition duration-1000 bg-black text-white flex items-center justify-center rounded-t-md cursor-pointer select-none'>
                            <ArrowUp size={12} />
                        </div>
                    </div>

                    <div className='flex gap-[2px]'>
                        <div onMouseDown={playClick} className='h-[19px] w-10 drop-shadow-sm drop-shadow-gray-200 border-b-1 border-white/60 active:border-0 transition duration-1000 bg-black text-white flex items-center justify-center rounded-bl-md cursor-pointer select-none'>
                            <ArrowLeft size={12} />
                        </div>
                        <div onMouseDown={playClick} className='h-[19px] w-10 drop-shadow-sm drop-shadow-gray-200 border-b-1 border-white/60 active:border-0 transition duration-1000 bg-black text-white flex items-center justify-center cursor-pointer select-none'>
                            <ArrowDown size={12} />
                        </div>
                        <div onMouseDown={playClick} className='h-[19px] w-10 drop-shadow-sm drop-shadow-gray-200 border-b-1 border-white/60 active:border-0 transition duration-1000 bg-black text-white flex items-center justify-center rounded-br-md cursor-pointer select-none'>
                            <ArrowRight size={12} />
                        </div>
                    </div>
                </div>

            </div>

            



        </div>
    )
}

export default Keyboard