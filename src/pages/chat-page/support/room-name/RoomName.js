import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

import SelectedRoomContext from '../selected-room-context/SelectedRoomContext'
import UserContext from '../../../../app/support/UserContext'
// import { getClasses } from '../../../../utils/style-utils/style-utils'

import styles from './RoomName.module.scss'

const RoomName = () => {
  const { selectedRoom } = useContext(SelectedRoomContext)
  const { user } = useContext(UserContext)
  const history = useHistory()
  const [roomInfo, setRoomInfo] = useState({})
  const { name, users } = roomInfo

  useEffect(() => {
    const getRoomInfo = async () => {
      try {
        const { data } = await axios.get(`http://localhost:8080/api/rooms/${selectedRoom}`)
        setRoomInfo(data)
      } catch (error) {
        history.push('/error')
      }
    }
    getRoomInfo()
  }, [selectedRoom, history])

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
