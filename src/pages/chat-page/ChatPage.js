import React, { useState } from 'react'

import Rooms from './support/rooms/Rooms'
import SelectedRoomContext from './support/selected-room-context/SelectedRoomContext'
import Chat from './support/chat/Chat'
import { isRoomSelected } from './support/utils/chat-utils'

const ChatPage = () => {
  const [selectedRoom, setSelectedRoom] = useState(null)
  const selectedRoomContext = {
    selectedRoom,
    setSelectedRoom
  }
  return (
    <div>
      <SelectedRoomContext.Provider value={selectedRoomContext}>
        <Rooms />
        {isRoomSelected(selectedRoom) && <Chat />}
      </SelectedRoomContext.Provider>
    </div>
  )
}

export default ChatPage