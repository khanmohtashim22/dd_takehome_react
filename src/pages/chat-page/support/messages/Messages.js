import React, { useContext } from 'react'

import SelectedRoomContext from '../selected-room-context/SelectedRoomContext'
import useGet from '../../../../components/use-get/UseGet'
import Message from '../message/Message'

import styles from './Messages.module.scss'

const Messages = () => {
  const { selectedRoom } = useContext(SelectedRoomContext)
  const messages = useGet(`http://localhost:8080/api/rooms/${selectedRoom}/messages`)

  return (
    <div className={styles.messages}>
      {
        messages && messages.length > 0 && messages.map(message => <Message key={message.id} message={message} />)
      }
    </div>
  )
}

export default Messages
