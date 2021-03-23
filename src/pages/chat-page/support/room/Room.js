import React, { useContext } from 'react'

import { getClasses } from '../../../../utils/style-utils/style-utils'
import SelectedRoomContext from '../selected-room-context/SelectedRoomContext'

import styles from './Room.module.scss'

const Room = ({ room }) => {
  const { name, id } = room
  const { setSelectedRoom, selectedRoom } = useContext(SelectedRoomContext)
  const selected = selectedRoom === id
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
