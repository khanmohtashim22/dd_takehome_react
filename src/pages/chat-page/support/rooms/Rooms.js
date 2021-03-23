import React, { useContext, useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

import UserContext from '../../../../app/support/UserContext'
import SelectedRoomContext from '../selected-room-context/SelectedRoomContext'
import Timer from '../timer/Timer'
import Room from '../room/Room'
import { isRoomSelected } from '../utils/chat-utils'

import styles from './Rooms.module.scss'

const Rooms = () => {
  const { user } = useContext(UserContext)
  const { setSelectedRoom, selectedRoom } = useContext(SelectedRoomContext)
  const [rooms, setRooms] = useState([])
  const history = useHistory()
  const hasRooms = rooms && rooms.length > 0

  useEffect(() => {
    const getRooms = async () => {
      try {
        const { data: rooms } = await axios.get('http://localhost:8080/api/rooms')
        setRooms(rooms)
      } catch (error) {
        history.push('/error')
      }
    }
    getRooms()
  }, [history, setSelectedRoom])

  useEffect(() => {
    if (hasRooms && !isRoomSelected(selectedRoom)) {
      setSelectedRoom(rooms[0].id)
    }
  }, [hasRooms, rooms, selectedRoom, setSelectedRoom])
  
  return (
    <div className={styles.container}>
      
      <div className={styles.userContainer}>
        <h1 className={styles.user}>{user}</h1>
        <Timer />
      </div>
      <ul className={styles.rooms}>
        {
          hasRooms && rooms.map(room => <Room key={room.id} room={room} />)
        }
      </ul>
    </div>
  )
}

export default Rooms