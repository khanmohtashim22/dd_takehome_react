import React, { useState } from 'react'

import useString from '../../components/use-string/UseStrings'
import Input from '../../components/input/Input'

import styles from './Login.module.scss'

const Login = () => {
  const [username, setUsername] = useState("")
  const getString = useString()
  const handleChange = e => setUsername(e.target.value)
  const handleSubmit = e => {
    e.preventDefault()
  }
  
  return (
    <form onSubmit={handleSubmit} className={styles.loginContainer}>
      <div className={styles.login}>
        <Input 
          className={styles.username} 
          id="username" 
          name="username" 
          value={username} 
          onChange={handleChange} 
          placeholder={getString('type.username')} 
        />
        <input type="submit" value={getString('join.doordash.chat')} className={styles.submit} />
      </div>
    </form>
  )
}

export default Login