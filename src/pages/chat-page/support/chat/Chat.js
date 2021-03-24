import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

import RoomName from '../room-name/RoomName'
import SelectedRoomContext from '../selected-room-context/SelectedRoomContext'
import { isRoomSelected } from '../utils/chat-utils'
import AddMessage from '../add-message/AddMessage'
import Messages from '../messages/Messages'

import styles from './Chat.module.scss'

const Chat = () => {
  const { selectedRoom } = useContext(SelectedRoomContext)
  const [messages, setMessages] = useState([])
  const history = useHistory()

  const addMessage = message => {
    setMessages([...messages, message])
  }

  useEffect(() => {
    const getMessages = async () => {
      try {
        const { data } = await axios.get(`http://localhost:8080/api/rooms/${selectedRoom}/messages`)
        setMessages(data)
      } catch (error) {
        history.push('/error')
      }
    }
    getMessages()
  }, [history, selectedRoom])

  return isRoomSelected(selectedRoom) ? (
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
  ) : null
}

export default Chat