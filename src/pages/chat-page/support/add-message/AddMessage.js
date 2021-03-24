import React, { useContext, useState } from 'react'
import axios from 'axios'

import Input from '../../../../components/input/Input'
import useString from '../../../../components/use-string/UseStrings'
import SelectedRoomContext from '../selected-room-context/SelectedRoomContext'
import UserContext from '../../../../app/support/UserContext'

import styles from './AddMessage.module.scss'

const AddMessage = () => {
  const [message, setMessage] = useState("")
  const getString = useString()
  const { selectedRoom } = useContext(SelectedRoomContext)
  const { user } = useContext(UserContext)

  const handleSubmit = e => {
    e.preventDefault()
    axios.post(`http://localhost:8080/api/rooms/${selectedRoom}/messages`, { name: user, message })
    setMessage("")
  }

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <Input
        id="message"
        name="message"
        value={message}
        onChange={e => setMessage(e.target.value)}
        placeholder={getString('type.message')}
      />
      <input type="submit" value={getString('send')} className={styles.send} />
    </form>
  )
}

export default AddMessage