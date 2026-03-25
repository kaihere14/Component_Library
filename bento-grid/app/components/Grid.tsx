import { BrainIcon, FolderIcon, GitBranch, Paperclip, Send, SendIcon, SquareMousePointer } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const chats = [{
    who: "agent",
    message: "Hello, how are you?"
},
{
    who: "user",
    message: "I'm good, thank you!"
},
{
    who: "agent",
    message: "What can I help you with?"
},
{
    who: "user",
    message: "I need help with my project."
},
{
    who: "agent",
    message: "I'm here to help you with your project."
}]

const Card = ({ children, className }: { children: React.ReactNode, className: string }) => {
    return <div className={className}>{children}</div>
}
const CardHeading = ({ children }: { children: React.ReactNode }) => {
    return <div className='text-md font-md flex gap-2 items-center'>{children}</div>
}
const CardDescription = ({ children }: { children: React.ReactNode }) => {
    return <div className='text-md font-md flex gap-2 items-center  pt-2 text-neutral-500'>{children}</div>
}

const CardIllustrations = ({ children }: { children: React.ReactNode }) => {
    return <div className='w-[calc(100%-10px)] mx-auto min-h-[73%] pt-3 '>{children}</div>
}

const Grid = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 min-w-full divide-neutral-200 divide-x divide-y' >
            <Card className="w-full h-110 p-4 overflow-hidden">
                <CardHeading>
                    <BrainIcon className='size-4' />
                    LLM Model Selector
                </CardHeading>
                <CardDescription>
                    Track real-time activity of agents with detailed records of triggers, tools used, outcomes, and timestamps.
                </CardDescription>
                <CardIllustrations>
                    <div className="main-card max-w-lg h-70 mt-16 mx-auto relative">
                        <div className="relative h-full rounded-t-2xl border border-neutral-200 bg-white p-2 shadow-[0_10px_80px_var(--color-neutral-300)]">
                            <div className='flex p-2 gap-2'>
                                <div className='bg-red-500 size-[12px] rounded-full'></div>
                                <div className='bg-yellow-500 size-[12px] rounded-full'></div>
                                <div className=' bg-green-500  size-[12px] rounded-full'></div>
                            </div>

                            <div className='pt-10 pl-2 flex gap-2 items-center'>
                                <FolderIcon className='size-4' />
                                <p className='text-md text-neutral-700 text-sm'>All Models</p>
                                <div className='bg-neutral-100 rounded-md p-1 text-[12px]'>
                                    69,420
                                </div>
                            </div>

                            <hr className='text-neutral-200 mt-2' />

                            <div className='relative h-[calc(100%-5.75rem)] overflow-hidden'>
                                <div className='ai-list flex flex-col gap-2 pb-12'>
                                    <div className='ml-2 mt-4 flex  items-center justify-between'>
                                        <div className='flex gap-2 text-[14px] items-center'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-claude text-orange-600" viewBox="0 0 16 16">
                                                <path d="m3.127 10.604 3.135-1.76.053-.153-.053-.085H6.11l-.525-.032-1.791-.048-1.554-.065-1.505-.08-.38-.081L0 7.832l.036-.234.32-.214.455.04 1.009.069 1.513.105 1.097.064 1.626.17h.259l.036-.105-.089-.065-.068-.064-1.566-1.062-1.695-1.121-.887-.646-.48-.327-.243-.306-.104-.67.435-.48.585.04.15.04.593.456 1.267.981 1.654 1.218.242.202.097-.068.012-.049-.109-.181-.9-1.626-.96-1.655-.428-.686-.113-.411a2 2 0 0 1-.068-.484l.496-.674L4.446 0l.662.089.279.242.411.94.666 1.48 1.033 2.014.302.597.162.553.06.17h.105v-.097l.085-1.134.157-1.392.154-1.792.052-.504.25-.605.497-.327.387.186.319.456-.045.294-.19 1.23-.37 1.93-.243 1.29h.142l.161-.16.654-.868 1.097-1.372.484-.545.565-.601.363-.287h.686l.505.751-.226.775-.707.895-.585.759-.839 1.13-.524.904.048.072.125-.012 1.897-.403 1.024-.186 1.223-.21.553.258.06.263-.218.536-1.307.323-1.533.307-2.284.54-.028.02.032.04 1.029.098.44.024h1.077l2.005.15.525.346.315.424-.053.323-.807.411-3.631-.863-.872-.218h-.12v.073l.726.71 1.331 1.202 1.667 1.55.084.383-.214.302-.226-.032-1.464-1.101-.565-.497-1.28-1.077h-.084v.113l.295.432 1.557 2.34.08.718-.112.234-.404.141-.444-.08-.911-1.28-.94-1.44-.759-1.291-.093.053-.448 4.821-.21.246-.484.186-.403-.307-.214-.496.214-.98.258-1.28.21-1.016.19-1.263.112-.42-.008-.028-.092.012-.953 1.307-1.448 1.957-1.146 1.227-.274.109-.477-.247.045-.44.266-.39 1.586-2.018.956-1.25.617-.723-.004-.105h-.036l-4.212 2.736-.75.096-.324-.302.04-.496.154-.162 1.267-.871z" />
                                            </svg>
                                            <p>Claude 4 Opus</p>
                                        </div>
                                        <div className='text-[12px] text-red-400 border border-red-400 rounded-md px-2 py-[0.5] bg-red-100/50'>
                                            Unavailable
                                        </div>
                                    </div>
                                    <div className='ml-2 mt-4 flex  items-center justify-between'>
                                        <div className='flex gap-2 text-[14px] items-center'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-openai" viewBox="0 0 16 16">
                                                <path d="M14.949 6.547a3.94 3.94 0 0 0-.348-3.273 4.11 4.11 0 0 0-4.4-1.934A4.1 4.1 0 0 0 8.423.2 4.15 4.15 0 0 0 6.305.086a4.1 4.1 0 0 0-1.891.948 4.04 4.04 0 0 0-1.158 1.753 4.1 4.1 0 0 0-1.563.679A4 4 0 0 0 .554 4.72a3.99 3.99 0 0 0 .502 4.731 3.94 3.94 0 0 0 .346 3.274 4.11 4.11 0 0 0 4.402 1.933c.382.425.852.764 1.377.995.526.231 1.095.35 1.67.346 1.78.002 3.358-1.132 3.901-2.804a4.1 4.1 0 0 0 1.563-.68 4 4 0 0 0 1.14-1.253 3.99 3.99 0 0 0-.506-4.716m-6.097 8.406a3.05 3.05 0 0 1-1.945-.694l.096-.054 3.23-1.838a.53.53 0 0 0 .265-.455v-4.49l1.366.778q.02.011.025.035v3.722c-.003 1.653-1.361 2.992-3.037 2.996m-6.53-2.75a2.95 2.95 0 0 1-.36-2.01l.095.057L5.29 12.09a.53.53 0 0 0 .527 0l3.949-2.246v1.555a.05.05 0 0 1-.022.041L6.473 13.3c-1.454.826-3.311.335-4.15-1.098m-.85-6.94A3.02 3.02 0 0 1 3.07 3.949v3.785a.51.51 0 0 0 .262.451l3.93 2.237-1.366.779a.05.05 0 0 1-.048 0L2.585 9.342a2.98 2.98 0 0 1-1.113-4.094zm11.216 2.571L8.747 5.576l1.362-.776a.05.05 0 0 1 .048 0l3.265 1.86a3 3 0 0 1 1.173 1.207 2.96 2.96 0 0 1-.27 3.2 3.05 3.05 0 0 1-1.36.997V8.279a.52.52 0 0 0-.276-.445m1.36-2.015-.097-.057-3.226-1.855a.53.53 0 0 0-.53 0L6.249 6.153V4.598a.04.04 0 0 1 .019-.04L9.533 2.7a3.07 3.07 0 0 1 3.257.139c.474.325.843.778 1.066 1.303.223.526.289 1.103.191 1.664zM5.503 8.575 4.139 7.8a.05.05 0 0 1-.026-.037V4.049c0-.57.166-1.127.476-1.607s.752-.864 1.275-1.105a3.08 3.08 0 0 1 3.234.41l-.096.054-3.23 1.838a.53.53 0 0 0-.265.455zm.742-1.577 1.758-1 1.762 1v2l-1.755 1-1.762-1z" />
                                            </svg>
                                            <p>ChatGPT</p>
                                        </div>
                                        <div className='text-[12px] text-emerald-400 border border-emerald-400 rounded-md px-2 py-[0.5] bg-emerald-100/50'>
                                            Connected
                                        </div>
                                    </div>
                                    <div className='ml-2 mt-4 flex  items-center justify-between'>
                                        <div className='flex gap-2 text-[14px] items-center'>
                                            <Image src={"/meta-color.svg"} height={14} width={14} alt='arman' />
                                            <p>Llama 3.2</p>
                                        </div>
                                        <div className='text-[12px] text-yellow-400 border border-yellow-400 rounded-md px-2 py-[0.5] bg-yellow-100/50'>
                                            Waiting
                                        </div>
                                    </div>
                                </div>
                                <div className='pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-b from-transparent via-white/80 to-white'></div>
                            </div>
                        </div>

                        <div className="floating-card absolute -top-10 -right-10 w-40 min-w-fit rounded-lg border border-neutral-200 bg-white shadow-[0_14px_30px_rgba(0,0,0,0.08)]">
                            <div className='flex items-center text-[12px] justify-between p-2  '>
                                <div className='flex gap-1 items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-openai" viewBox="0 0 16 16">
                                        <path d="M14.949 6.547a3.94 3.94 0 0 0-.348-3.273 4.11 4.11 0 0 0-4.4-1.934A4.1 4.1 0 0 0 8.423.2 4.15 4.15 0 0 0 6.305.086a4.1 4.1 0 0 0-1.891.948 4.04 4.04 0 0 0-1.158 1.753 4.1 4.1 0 0 0-1.563.679A4 4 0 0 0 .554 4.72a3.99 3.99 0 0 0 .502 4.731 3.94 3.94 0 0 0 .346 3.274 4.11 4.11 0 0 0 4.402 1.933c.382.425.852.764 1.377.995.526.231 1.095.35 1.67.346 1.78.002 3.358-1.132 3.901-2.804a4.1 4.1 0 0 0 1.563-.68 4 4 0 0 0 1.14-1.253 3.99 3.99 0 0 0-.506-4.716m-6.097 8.406a3.05 3.05 0 0 1-1.945-.694l.096-.054 3.23-1.838a.53.53 0 0 0 .265-.455v-4.49l1.366.778q.02.011.025.035v3.722c-.003 1.653-1.361 2.992-3.037 2.996m-6.53-2.75a2.95 2.95 0 0 1-.36-2.01l.095.057L5.29 12.09a.53.53 0 0 0 .527 0l3.949-2.246v1.555a.05.05 0 0 1-.022.041L6.473 13.3c-1.454.826-3.311.335-4.15-1.098m-.85-6.94A3.02 3.02 0 0 1 3.07 3.949v3.785a.51.51 0 0 0 .262.451l3.93 2.237-1.366.779a.05.05 0 0 1-.048 0L2.585 9.342a2.98 2.98 0 0 1-1.113-4.094zm11.216 2.571L8.747 5.576l1.362-.776a.05.05 0 0 1 .048 0l3.265 1.86a3 3 0 0 1 1.173 1.207 2.96 2.96 0 0 1-.27 3.2 3.05 3.05 0 0 1-1.36.997V8.279a.52.52 0 0 0-.276-.445m1.36-2.015-.097-.057-3.226-1.855a.53.53 0 0 0-.53 0L6.249 6.153V4.598a.04.04 0 0 1 .019-.04L9.533 2.7a3.07 3.07 0 0 1 3.257.139c.474.325.843.778 1.066 1.303.223.526.289 1.103.191 1.664zM5.503 8.575 4.139 7.8a.05.05 0 0 1-.026-.037V4.049c0-.57.166-1.127.476-1.607s.752-.864 1.275-1.105a3.08 3.08 0 0 1 3.234.41l-.096.054-3.23 1.838a.53.53 0 0 0-.265.455zm.742-1.577 1.758-1 1.762 1v2l-1.755 1-1.762-1z" />
                                    </svg>
                                    <p className=''>Open AI</p>
                                </div>
                                <p className='text-md text-neutral-500 font-light'>GPT 5</p>
                            </div>

                            <hr className='mt text-neutral-200' />

                            <div className='p-2'>
                                <p className='px-2 text-[12px] h-fit w-fit  rounded-sm border border-blue-500 text-blue-500'>Connected</p>
                            </div>

                        </div>

                    </div>


                </CardIllustrations>
            </Card>

            <Card className="w-full h-110 p-4  overflow-hidden">
                <CardHeading>
                    <SquareMousePointer className='size-4 ' />
                    Text to workflow builder
                </CardHeading>
                <CardDescription>
                    Preview and debug workflow logic in a safe sandbox before deploying, helping you iterate with confidence.
                </CardDescription>
                <CardIllustrations>
                    <div className='h-64 w-full max-w-md mx-auto mt-20 flex flex-col gap-2 [mask-image:linear-gradient(to_bottom,transparent,black_10%)] relative   '>
                        <div className='flex flex-col gap-2 '>
                            {chats.map((chat, index) => (
                                chat.who === "agent" ? (
                                    <div key={index} className='flex items-center gap-2'>
                                        <div className="logo bg-white shadow-sm p-2 flex justify-center items-center rounded-full min-size-4">
                                            <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-4 text-white dark:text-black"><path d="M0 4.5C0 3.11929 1.11929 2 2.5 2H7.5C8.88071 2 10 3.11929 10 4.5V9.40959C10.0001 9.4396 10.0002 9.46975 10.0002 9.50001C10.0002 10.8787 11.1162 11.9968 12.4942 12C12.4961 12 12.4981 12 12.5 12H17.5C18.8807 12 20 13.1193 20 14.5V19.5C20 20.8807 18.8807 22 17.5 22H12.5C11.1193 22 10 20.8807 10 19.5V14.5C10 14.4931 10 14.4861 10.0001 14.4792C9.98891 13.1081 8.87394 12 7.50017 12C7.4937 12 7.48725 12 7.48079 12H2.5C1.11929 12 0 10.8807 0 9.5V4.5Z" fill="currentColor"></path></svg>
                                        </div>
                                        <p className='text-[12px] bg-neutral-100 self-start rounded-t-xl  rounded-br-xl p-2 w-fit'>{chat.message}</p>
                                    </div>
                                ) : (
                                    <div key={index} className='flex justify-end gap-2'>

                                        <p className='text-[12px] bg-blue-600 text-white rounded-t-xl rounded-bl-xl p-2 w-fit'>{chat.message}</p>

                                        <div>
                                            <Image
                                                src="/avatar.webp"
                                                alt="avatar"
                                                width={100}
                                                height={100}
                                                className="max-h-8 max-w-8 rounded-full"
                                            />
                                        </div>

                                    </div>
                                )
                            ))}
                        </div>

                        <input type="text" className='absolute bottom-2 left-0  flex items-center  shadow-sm w-93 ml-10 placeholder:text-[12px] h-10 bg-white border border-neutral-200 rounded-lg pl-2 outline-none' placeholder='Ask Notus AI' />
                        <div className='flex gap-2 items-center absolute bottom-5 right-12'>
                            <Paperclip className='size-4' />
                            <Send className='size-4' />
                        </div>

                    </div>
                </CardIllustrations>
            </Card>

            <Card className="w-full h-110 p-4  lg:col-span-2 overflow-hidden">
                <CardHeading>
                    <GitBranch className='size-4' />
                    Native Tools Integration
                </CardHeading>
                <CardDescription>
                    Track real-time activity of agents with detailed records of triggers, tools used, outcomes, and timestamps.
                </CardDescription>
                <CardIllustrations>
                    <Image
                        src={"/ss.png"}
                        height={3000}
                        width={3000}
                        alt='hello'
                        className='h-full w-full'
                    />
                </CardIllustrations>
            </Card>
        </div>
    )
}

export default Grid
