import React, { useContext } from 'react'

import RoomName from '../room-name/RoomName'
import SelectedRoomContext from '../selected-room-context/SelectedRoomContext'
import { isRoomSelected } from '../utils/chat-utils'

import styles from './Chat.module.scss'

const Chat = () => {
  const { selectedRoom } = useContext(SelectedRoomContext)
  return isRoomSelected(selectedRoom) ? (
    <div className={styles.chat}>
      <RoomName />
    </div>
  ) : null
}

export default Chat