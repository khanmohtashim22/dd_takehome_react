import React, { useContext } from 'react'

import RoomName from '../room-name/RoomName'
import SelectedRoomContext from '../selected-room-context/SelectedRoomContext'
import { isRoomSelected } from '../utils/chat-utils'
import RoomMessages from '../room-messages/RoomMessages'

import styles from './Chat.module.scss'

const Chat = () => {
  const { selectedRoom } = useContext(SelectedRoomContext)
  return isRoomSelected(selectedRoom) ? (
    <div className={styles.chat}>
      <RoomName />
      <RoomMessages />
    </div>
  ) : null
}

export default Chat