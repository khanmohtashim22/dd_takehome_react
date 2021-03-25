import React, { useContext } from 'react'

import RoomName from '../room-name/RoomName'
import SelectedRoomContext from '../selected-room-context/SelectedRoomContext'
import AddMessage from '../add-message/AddMessage'
import Messages from '../messages/Messages'
import useGet from '../../../../components/use-get/UseGet'

import styles from './Chat.module.scss'

const Chat = () => {
  const { selectedRoom } = useContext(SelectedRoomContext)
  const [messages, setMessages] = useGet(`http://localhost:8080/api/rooms/${selectedRoom}/messages`)

  const addMessage = message => {
    setMessages([...messages, message])
  }

  return (
    <div className={styles.chat}>
      <div className={styles.roomName}>
        <RoomName />
      </div>
      <div className={styles.messages}>
        <Messages messages={messages} />
      </div>
      <div className={styles.addMessage}>
        <AddMessage addMessage={addMessage} />
      </div>
    </div>
  )
}

export default Chat