import React, { useContext } from 'react'

import SelectedRoomContext from '../selected-room-context/SelectedRoomContext'
import { getClasses } from '../../../../utils/style-utils/style-utils'

import styles from './Room.module.scss'

const Room = ({ room }) => {
  const { name, id } = room
  const { selectedRoom, setSelectedRoom } = useContext(SelectedRoomContext)
  const selected = id === selectedRoom
  const handleClick = () => {
    setSelectedRoom(id)
  }

  return (
    <li>
      <button onClick={handleClick} className={getClasses({ styles, classes: ['room', selected && 'selected'] })}>
        {name}
      </button>
    </li>
  )
}

export default Room
