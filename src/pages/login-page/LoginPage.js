import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'

import useString from '../../components/use-string/UseStrings'
import Input from '../../components/input/Input'
import UserContext from '../../app/support/UserContext'
import Text from '../../components/text/Text'

import styles from './LoginPage.module.scss'

const LoginPage = () => {
  const [username, setUsername] = useState("")
  const [error, setError] = useState(false)
  const getString = useString()
  const { setUser } = useContext(UserContext)
  const history = useHistory()

  const handleChange = e => {
    if(error) {
      setError(false)
    }
    setUsername(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (username.length <= 0) {
      setError(true)
    } else {
      setUser(username)
      history.push('/chat')
    }
  }
  
  return (
    <form data-testid="login" onSubmit={handleSubmit} className={styles.loginContainer}>
      <div className={styles.login}>
        {error && <Text id="username.error" el="h1" className={styles.error} />}
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

export default LoginPage
