import React from 'react'
import Information from '../components/core/Information'

const Permissions = () => {
  return (
    <div className='flex gap-14 w-full min-h-screen border pt-15'>

      <div className='flex flex-col gap-10 justify-center items-center flex-1 border'>

        {/* temproary part */}
        <div className='flex flex-col items-center gap-5 p-5 border rounded-3xl border-[#0196B8] w-10/12 text-sm shadow-2xl'>
          <p>Lorem ipsum dolor sit.</p>
          <p>Lorem ipsum dolor sit.</p>
          <p>Lorem ipsum dolor sit.</p>
          <p>Lorem ipsum dolor sit.</p>
        </div>

        <Information />
      </div>

      <div className="flex-1 border">Put webcam here</div>
    </div>
  )
}

export default Permissions
