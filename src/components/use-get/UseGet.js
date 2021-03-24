import { useEffect, useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const UseGet = (url) => {
  const [response, setResponse] = useState(null)
  const history = useHistory()
  
  useEffect(() => {
    const get = async () => {
      try {
        const { data } = await axios.get(url)
        setResponse(data)
      } catch (error) {
        history.push('/error')
      }
    }
    get()
  }, [url, history])

  return response
}

export default UseGet