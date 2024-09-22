import React from 'react'

const Chatbot = () => {
  return (
    <>
    <div className='chat-chat flex fixed gap-3 justify-end flex-col z-20 h-[70%] right-[10px] top-[90px]'><iframe
        src="https://www.chatbase.co/chatbot-iframe/xflJLbzn1KAxo6U9lL9ry"
        width="100%"
        style={{ height: '100%', minHeight: '400px' }}
        title="Chatbot"
      ></iframe></div>
    </>
  )
}

export default Chatbot