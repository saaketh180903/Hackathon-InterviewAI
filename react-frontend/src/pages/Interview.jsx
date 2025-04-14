import React, { useEffect, useState } from 'react'
import Information from '../components/core/Information'

const Interview = () => {
  const questions = [
    "What is React?",
    "Explain useEffect in React.",
    "What is the Virtual DOM?",
    "Explain the use of Redux.",
    "What are props in React?",
    "What is the purpose of keys in lists?",
    "How does context API work?",
    "What is a higher-order component?",
    "Explain lifecycle methods in class components.",
    "What is the difference between state and props?"
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [timeLeft, setTimeLeft] = useState(20)

  useEffect(() => {
    if (currentIndex < questions.length) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev === 1) {
            clearInterval(timer)
            setCurrentIndex((prevIndex) => prevIndex + 1)
            return 20
          }
          return prev - 1
        })
      }, 1000)

      return () => clearInterval(timer)
    }
  }, [currentIndex])

  return (
    <div className='flex gap-14 w-full min-h-screen border pt-15 px-6'>
      <div className='flex flex-col gap-10 justify-center items-center flex-1 border'>
        {/* Question display */}
        <div className='text-center space-y-4'>
          {currentIndex < questions.length ? (
            <>
              <h2 className='text-xl font-semibold'>Question {currentIndex + 1}</h2>
              <p className='text-lg'>{questions[currentIndex]}</p>
              <p className='text-sm text-gray-500'>Time remaining: {timeLeft}s</p>
            </>
          ) : (
            <h2 className='text-xl font-bold text-green-600'>Interview Complete!</h2>
          )}
        </div>

        {/* Buttons for all questions */}
        <div className='flex flex-wrap justify-center gap-2'>
          {questions.map((_, index) => (
            <button
              key={index}
              disabled
              className={`px-4 py-2 rounded text-white text-sm ${
                index === currentIndex
                  ? 'bg-blue-600'
                  : index < currentIndex
                  ? 'bg-green-500'
                  : 'bg-gray-400'
              }`}
            >
              Question {index + 1}
            </button>
          ))}
        </div>

        {/* Placeholder for Information Component */}
        <div className="mt-4">
          <Information />
        </div>
      </div>

      {/* Webcam section */}
      <div className="flex-1 border flex justify-center items-center text-gray-500 text-lg">
        Put webcam here
      </div>
    </div>
  )
}

export default Interview