import React, { useRef, useEffect } from 'react'

const ScrollToBottom = ({ children, onChangeOf }) => {
  const scrollElement = useRef()

  useEffect(() => {
    scrollElement.current.scrollIntoView()
  }, [onChangeOf])
  
  return (
    <div>
      {children}
      <div ref={scrollElement}  />
    </div>
  )
}

export default ScrollToBottom