import React, { useState } from 'react'

import Input from '../../../../components/input/Input'
import useString from '../../../../components/use-string/UseStrings'

import styles from './AddMessage.module.scss'

const AddMessage = () => {
  const [message, setMessage] = useState("")
  const getString = useString()

  return (
    <form className={styles.container}>
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