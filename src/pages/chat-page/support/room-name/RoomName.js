import React, { useContext } from 'react'

import SelectedRoomContext from '../selected-room-context/SelectedRoomContext'
import UserContext from '../../../../app/support/UserContext'
import useGet from '../../../../components/use-get/UseGet'

import styles from './RoomName.module.scss'

const RoomName = () => {
  const { selectedRoom } = useContext(SelectedRoomContext)
  const { user } = useContext(UserContext)
  const roomInfo = useGet(`http://localhost:8080/api/rooms/${selectedRoom}`)
  const { name, users } = roomInfo || {}

  return name ? (
    <div className={styles.roomName}>
      <h1 className={styles.name}>{name}</h1>
      <div className={styles.users}>
        {
          [user, ...users].map((user, index, arr) => (
            <span key={index} className={styles.user}>
              <span>{user}</span>
              <span>{arr.length - 1 !== index && ','}</span>
            </span>
          ))
        }
      </div>
    </div>
  ) : null
}

export default RoomName
