import React from 'react'

import Message from '../message/Message'

import styles from './Messages.module.scss'

const Messages = ({ messages }) => (
  <div className={styles.messages}>
    {
      messages && messages.length > 0 && messages.map((message, index) => <Message key={index} message={message} />)
    }
  </div>
)

export default Messages
