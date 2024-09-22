import React from 'react'

const Chatbot = () => {
  return (
    <>
    <div className='chat-chat flex fixed gap-3 flex-col z-20 h-[50%] right-[10px] top-[200px]'><iframe
        src="https://www.chatbase.co/chatbot-iframe/xflJLbzn1KAxo6U9lL9ry"
        width="100%"
        style={{ height: '60%', minHeight: '400px' }}
        title="Chatbot"
      ></iframe></div>
    </>
  )
}

export default Chatbot