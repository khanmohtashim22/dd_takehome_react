import React from 'react'

const Message = ({ message }) => {
  const { name, message: messageContent } = message
  return (
    <div>
      <div>
        {name}
      </div>
      <div>
        {
          messageContent
        }
      </div>
    </div>
  )
}

export default Message