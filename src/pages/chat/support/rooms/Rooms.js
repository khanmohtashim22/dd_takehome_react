import React, { useContext, useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

import UserContext from '../../../../app/support/UserContext'
import Timer from '../../../../components/timer/Timer'
import Room from '../room/Room'
import SelectedRoomContext from '../selected-room-context/SelectedRoomContext'

import styles from './Rooms.module.scss'

const Rooms = () => {
  const { user } = useContext(UserContext)
  const { setSelectedRoom } = useContext(SelectedRoomContext)
  const [rooms, setRooms] = useState([])
  const history = useHistory()

  useEffect(() => {
    const getRooms = async () => {
      try {
        const { data: rooms } = await axios('http://localhost:8080/api/rooms')
        setRooms(rooms)
        setSelectedRoom(rooms[0].id)
      } catch (error) {
        console.log('error', error)
        history.push('/error')
      }
    }

    getRooms()
  }, [history, setSelectedRoom])

  return (
    <div className={styles.container}>
      
      <div className={styles.userContainer}>
        <h1 className={styles.user}>{user}</h1>
        <Timer />
      </div>
      <ul className={styles.rooms}>
        {
          rooms && rooms.length > 0 && rooms.map(room => <Room key={room.id} room={room} />)
        }
      </ul>
    </div>
  )
}

export default Rooms