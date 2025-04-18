import React from 'react'

const Evaluation = ({ title, evaluations }) => {
  return (
    <div className='shadow-lg rounded-lg bg-white p-3 w-xs'>
      <h2 className='font-bold text-sm mb-2'>{title}</h2>
      <div className='flex flex-col gap-2'>
        {evaluations.map((item, index) => (
          <div key={index} className='flex justify-between text-sm font-medium'>
            <p>{index + 1}. {item.label}</p>
            <p className='w-16 h-6 text-center border'>{item.score}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Evaluation
