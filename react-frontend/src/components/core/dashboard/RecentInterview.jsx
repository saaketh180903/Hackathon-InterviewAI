import React from 'react'
import { Link } from 'react-router-dom'
import { GoDotFill } from "react-icons/go";
import { IoIosPaper } from "react-icons/io";
import { MdNavigateNext } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

const RecentInterview = () => {
    return (
        <div className='w-full'>
            <div className=' text-right w-full pr-3'>
                <Link to="/" className="text-sm font-bold text-black underline">
                    View Analysis
                </Link>
            </div>

            <div className='rounded-3xl py-6 px-4 border border-[#0196B8] bg-white/30 backdrop-blur-md shadow-2xl flex flex-col gap-5 justify-center items-center'>
                <div className='flex justify-between gap-2 w-full'>
                    <h2 className=' text-xl font-bold text-[#1A3652]'>UX/UI Designer</h2>
                    <div className=' text-sm px-5 py-1 border border-red-500 rounded-4xl'>20 Days Ago</div>
                </div>

                <div className='w-full text-sm'>
                    <div className='flex items-center'>
                        <GoDotFill className='text-red-700' />
                        <p>Key Stacks: Figma, Wire Framing, Prototype</p>
                    </div>
                    <div className='flex items-center'>
                        <GoDotFill className='text-red-700' />
                        <p>Created: 25/03/2025</p>
                    </div>
                    <div className='flex justify-between'>
                        <div className='flex items-center'>
                            <GoDotFill className='text-red-700' />
                            <p>PoC: Ujwal Mohanty</p></div>
                        <div className='flex items-center'>
                            <GoDotFill className='text-red-700' />
                            <p>Status: </p>
                            <span className='font-bold ml-1'> PASS</span>
                        </div>
                    </div>
                </div>

                <div className='flex gap-1 items-center justify-around w-full'>
                    <div className='flex justify-center items-center gap-1 border px-2 rounded-sm border-[#0196B8]'>
                        <IoIosPaper />
                        <div className=' text-base font-semibold'>Feedback</div>
                    </div>
                    <div className='flex justify-center items-center gap-1 border px-3 rounded-sm border-[#0196B8] text-white bg-gradient-to-r from-[#3B7AB8] to-[#0196B8]'>
                        <div className=' text-base'>Start</div>
                        <MdNavigateNext className='text-xl' />
                    </div>

                    <div className='border border-red-500 p-2 rounded-sm'>
                        <RiDeleteBin6Line className='text-base' />
                    </div>


                </div>
            </div>
        </div>
    );
};

export default RecentInterview;
