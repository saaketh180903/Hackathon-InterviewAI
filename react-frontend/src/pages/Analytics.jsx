import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { FaLinkedin } from "react-icons/fa6";
import loginImg from "../assets/colourfull-ball.png"
import Evaluation from '../components/core/dashboard/Evaluation';
import DonutChart from '../components/core/dashboard/DonutChart';


const Analytics = () => {
    return (
        <div className="w-screen min-h-screen flex justify-center py-20">
            <div className="rounded-3xl max-w-7xl w-8/12 border border-[#0196B8] bg-[#e7ecfc] p-5">
                <div className="w-full flex gap-2">
                    <div className="w-full flex flex-col justify-between">
                        <div className="flex items-center gap-5 p-3">
                            <div className="h-36 w-36 border-2 border-[#1A3652] rounded-full overflow-hidden p-2">
                                <img
                                    src={loginImg}
                                    alt="Profile Pic"
                                    className="h-full w-full object-cover rounded-full"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <h2 className=" text-2xl font-bold">Harsh</h2>
                                <div className=" font-semibold">
                                    <span className="font-bold mr-1">JOB ID:</span>
                                    dshgfvksdf
                                </div>
                                <div className=" font-semibold">
                                    <span className="font-bold mr-1">ROLE:</span>
                                    Manager
                                </div>
                                <div className="flex gap-2">
                                    <FcGoogle className="text-3xl border-[#BCBEC0] rounded-full p-1 bg-white" />
                                    <FaLinkedin className="text-3xl text-blue-700 border-[#BCBEC0] rounded-full p-1 bg-white" />
                                </div>
                            </div>
                        </div>

                        {/* charts */}
                        <div className='flex gap-3 items-center justify-evenly'>
                            <DonutChart value={80} label="Completed" />
                            <DonutChart value={80} label="Completed" />
                            <DonutChart value={80} label="Completed" />
                        </div>
                    </div>
                    {/* video section */}
                    <div className="">
                        <div className="w-[450px] h-[250px] border-2 mt-5 p-4 rounded-2xl border-black">
                            <div className="h-full w-full rounded-xl">
                                put video here
                            </div>
                        </div>
                        <div className="mt-10 flex gap-3 justify-center items-center">
                            <button className=" w-32 h-9 bg-gradient-to-r from-[#3B7AB8] to-[#0196B8] text-center text-white text-sm rounded-md">
                                View Resume
                            </button>
                            <button className=" w-32 h-9 bg-gradient-to-r from-[#3B7AB8] to-[#0196B8] text-center text-white text-sm rounded-md leading-4">
                                View Interview highlights
                            </button>
                        </div>
                    </div>
                </div>

                {/* evaluation */}
                <div className="w-full flex gap-2 mt-10">
                    <Evaluation
                        title="GENERAL EVALUATION:"
                        evaluations={[
                            { label: "Lorem Ipsum", score: "7/10" },
                            { label: "Lorem Ipsum", score: "7/10" },
                            { label: "Lorem Ipsum", score: "7/10" },
                        ]}
                    />
                    <Evaluation
                        title="TECHNICAL EVALUATION:"
                        evaluations={[
                            { label: "React Knowledge", score: "8/10" },
                            { label: "Problem Solving", score: "9/10" },
                            { label: "System Design", score: "6/10" },
                        ]}
                    />
                </div>

                <div className="mt-10 gap-5 flex justify-center items-center">
                    <button className=" w-32 h-9 bg-gradient-to-r from-[#CB0828] to-[#A40103] text-center text-white text-sm rounded-md">
                        Rejection Mail
                    </button>
                    <button className=" w-32 h-9 bg-gradient-to-r from-[#0196B8] to-[#2C4068] text-center text-white text-sm rounded-md">
                        Print Report
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Analytics
