import React from 'react'

import Message from '../message/Message'

import styles from './Messages.module.scss'

const Messages = ({ messages }) => (
  <ul className={styles.messages}>
    {
      messages && messages.length > 0 && messages.map((message, index) => <Message key={index} message={message} />)
    }
  </ul>
)

export default Messages
