import React from 'react'
import { FaPlusCircle } from "react-icons/fa";
import RecentInterview from '../components/core/dashboard/RecentInterview';

const dashboard = () => {
    return (
        <div className='mt-20 max-w-7xl mx-auto'>
            <div className='text-[#1A3652] flex flex-col gap-5'>
                <h1 className=' text-3xl font-bold'>Kingshuk's</h1>
                <h2 className=' text-5xl font-bold'>DASHBOARD</h2>
                <p className=' text-xl font-medium'>Personalize your interview prep with AI based on your desired role and skills. Generate role-specific
                    interview scenarios crafted to your future career path.</p>
            </div>

            <div className=' grid grid-cols-3 gap-5 mt-10'>
                <div className='rounded-3xl py-6 px-4 border border-[#0196B8] bg-white/30 backdrop-blur-md shadow-2xl flex flex-col gap-5 justify-center items-center'>
                    <h3 className='text-[#1A3652] text-2xl font-bold'>Ignite the AI Experience!</h3>
                    <p className='text-sm font-semibold text-center'>Build an interview experience tailored to your career journey with the power of AI.
                        Let AI tailor your interview journey to match your dreams.</p>
                    <div className='rounded-md border-[#0196B8] border bg-white p-3 flex flex-col gap-2 justify-center items-center'>
                        <h3 className='text-[#1A3652] text-xl font-bold'>Create New Interview</h3>
                        <p className='text-sm'>(Feel the AI Flow!)</p>
                        <FaPlusCircle className="text-blue-700 w-7 h-7 cursor-pointer" />
                    </div>
                </div>

                <div>
                    <RecentInterview />
                </div>
            </div>
        </div>
    )
}

export default dashboard
