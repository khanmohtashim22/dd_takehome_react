import React from 'react'

import { getClasses } from '../../utils/style-utils/style-utils'

import styles from './Input.module.scss'

const Input = ({ id, placeholder, name, value, onChange, className }) => (
  <input 
    data-testid={id}
    id={id} 
    name={name} 
    value={value} 
    onChange={onChange} 
    placeholder={placeholder} 
    className={getClasses({ styles, classes: ['input'], className})}
  />
)

export default Input