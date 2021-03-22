import React, { useState } from 'react'

import Rooms from './support/rooms/Rooms'
import SelectedRoomContext from './support/selected-room-context/SelectedRoomContext'

const Chat = () => {
  const [selectedRoom, setSelectedRoom] = useState(null)
  const selectedRoomContext = {
    selectedRoom,
    setSelectedRoom
  }
  return (
    <div>
      <SelectedRoomContext.Provider value={selectedRoomContext}>
        <Rooms />
      </SelectedRoomContext.Provider>
    </div>
  )
}

export default Chat