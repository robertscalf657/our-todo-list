import React from 'react'

export default function TodoItem({id, text, completed}) {
  return (
    <div key={{id}} className="bg-gray-300 width-full mx-10 p-3 shadow-md">
            <p className="text-xl text-gray-700">
             {text}
            </p>
          </div>
  )
}
