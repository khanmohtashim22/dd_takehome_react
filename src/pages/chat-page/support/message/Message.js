import React, { useContext } from 'react'

import UserContext from '../../../../app/support/UserContext'
import { getClasses } from '../../../../utils/style-utils/style-utils'

import styles from './Message.module.scss'

const Message = ({ message }) => {
  const { name, message: messageContent } = message
  const { user } = useContext(UserContext)
  const ownMessage = user === name
  return (
    <li className={styles.container}>
      {!ownMessage && <h6>{name}</h6>}
      <div className={getClasses({ styles, classes: [ownMessage ? 'ownMessage' : 'message'] })}>
        <p>{messageContent}</p>
      </div>
    </li>
  )
}

export default Message