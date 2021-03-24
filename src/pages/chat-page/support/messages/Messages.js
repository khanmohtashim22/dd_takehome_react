import React, { useContext, useEffect, useState } from 'react'

import SelectedRoomContext from '../selected-room-context/SelectedRoomContext'

import styles from './Messages.module.scss'

const Messages = () => {
  const { selectedRoom } = useContext(SelectedRoomContext)
  const [messages, setMessages] = useState([])

  useEffect(() => {
    console.log('comebac', messages)
    setMessages([])
  }, [selectedRoom, messages])

  return (
    <div className={styles.messages}>
      Lorem ipsum dolor sit amet
    </div>
  )
}

export default Messages
