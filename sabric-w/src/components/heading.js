import React from 'react'

function heading({text}) {
  return (
    <div className="block text-4xl font-bold relative w-full bottom-1/4 mb-6">
        <h1>{text}</h1>
    </div>
  )
}

export default heading