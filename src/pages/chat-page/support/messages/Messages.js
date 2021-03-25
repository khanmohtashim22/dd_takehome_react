import React from 'react'

import Message from '../message/Message'
import ScrollToBottom from '../../../../components/scroll-to-bottom/ScrollToBottom'

import styles from './Messages.module.scss'

const Messages = ({ messages }) => (
  <ScrollToBottom onChangeOf={messages}>
    <ul className={styles.messages}>
      {
        messages && messages.length > 0 && messages.map((message, index) => <Message key={index} message={message} />)
      }
    </ul>
  </ScrollToBottom>
)

export default Messages
