import React from 'react'
import SvgComponent from './SvgComponent';
function ChatMessage({message}) {
  return (
    <div className='pt-[24px] '>
    <div className='chat-message  flex flex-row items-center space-x-4 bg-[#444654] px-[150px] p-4 text-lg'>
      <div className='avator bg-[#0da37f] rounded-md items-center flex flex-col justify-center w-[50px] h-[50px]'>
        <SvgComponent/>
      </div>
      <div className='message'> {message.message}</div>
    </div>

  </div>
  )
}

export default ChatMessage
