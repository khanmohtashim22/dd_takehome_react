import React, { useContext } from 'react'

import RoomName from '../room-name/RoomName'
import SelectedRoomContext from '../selected-room-context/SelectedRoomContext'
import { isRoomSelected } from '../utils/chat-utils'
import AddMessage from '../add-message/AddMessage'
import Messages from '../messages/Messages'

import styles from './Chat.module.scss'

const Chat = () => {
  const { selectedRoom } = useContext(SelectedRoomContext)
  return isRoomSelected(selectedRoom) ? (
    <div className={styles.chat}>
      <div className={styles.roomName}>
        <RoomName />
      </div>
      <div className={styles.messages}>
        <Messages />
      </div>
      <div className={styles.addMessage}>
        <AddMessage />
      </div>
    </div>
  ) : null
}

export default Chat