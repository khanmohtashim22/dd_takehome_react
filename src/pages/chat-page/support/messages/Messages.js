import React from 'react'

import Message from '../message/Message'
import ScrollToBottom from '../../../../components/scroll-to-bottom/ScrollToBottom'

import styles from './Messages.module.scss'

const Messages = ({ messages }) => messages && messages.length > 0 ? (
  <ScrollToBottom onChangeOf={messages}>
    <ul className={styles.messages}>
      {
        messages.map((message, index) => <Message key={index} message={message} />)
      }
    </ul>
  </ScrollToBottom>
) : null

export default Messages
