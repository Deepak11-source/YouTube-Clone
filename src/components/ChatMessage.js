import React from 'react'

const ChatMessage = ({name, message}) => {
  return (
    <div className='flex items-center shadow-md p-2'>
        <img className='h-8' alt='user' src='https://cdn.iconscout.com/icon/free/png-256/free-user-1493-459372.png'/>
        <span className='font-bold px-2'>{name}</span>
        <span>{message}</span>
    </div>
  )
}

export default ChatMessage