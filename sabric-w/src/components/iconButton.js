import React from 'react'

function iconButton({ icon: Icon, text, id }) {
  return (
    <div className="bg-none flex flex-row px-5 py-3 justify-center text-gray-300 cursor-pointer opacity-70 active:text-violet-400 active:bg-white" key={id}>
        <Icon size={24} className="w-1/3 -rotate-45 active:text-orange-600" />
        <p className="capitalize w-2/3">{text}</p>
    </div>
  )
}

export default iconButton