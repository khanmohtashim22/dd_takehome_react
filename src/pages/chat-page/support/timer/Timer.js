import React, { useEffect, useState } from 'react'

import Text from '../../../../components/text/Text'
import { getClasses } from '../../../../utils/style-utils/style-utils'

import styles from './Timer.module.scss'

const Timer = () => {
  const [time, setTime] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(seconds => seconds + 1)
    }, 60000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div data-testid="time" className={getClasses({ styles, classes: ['timer', !time && 'hidden'] })}>
      <Text id="online.for" el="span" />
      <span> {time} </span>
      <Text id="minutes" el="span" />
    </div>
  )
}

export default Timer