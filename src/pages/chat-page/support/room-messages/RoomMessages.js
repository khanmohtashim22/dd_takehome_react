import React from 'react'

import AddMessage from '../add-message/AddMessage'

import styles from './RoomMessages.module.scss'

const RoomMessages = () => {
  return (
    <div className={styles.roomMessages}>
      <div>
        messages
      </div>
      <div className={styles.addMessage}>
        <AddMessage />
      </div>
    </div>
  )
}

export default RoomMessages