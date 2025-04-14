import React from 'react'
import { IoBulb } from "react-icons/io5";

const Information = () => {
  return (
    <div className='flex flex-col gap-5 p-5 border rounded-3xl border-[#0196B8] w-10/12 text-sm shadow-2xl bg-[#e7ecfc]'>
      <div className='flex gap-2'>
        <IoBulb className='text-yellow-600 text-2xl' />
        <h2 className=' text-[#AA0543] font-bold text-base'>IMPORTANT INFORMATION</h2>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim excepturi suscipit ipsum,
        reprehenderit nesciunt perferendis architecto accusantium doloremque a. Ea culpa corporis,
        minus quae repellendus dolor nobis neque, quam ad a ab? Numquam magni exercitationem amet at nihil,
        explicabo atque mollitia.
      </p>
      <p><span className=' font-bold'>NOTE: </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam dolor magnam distinctio
        aperiam veritatis cum eum cupiditate perspiciatis odit. Quos exercitationem nihil porro unde saepe ipsum
        dolorem cupiditate ipsam odit.</p>
    </div>
  )
}

export default Information
