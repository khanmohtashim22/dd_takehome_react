import React from 'react'

import UseString from '../use-string/UseStrings'

const Text = ({ el = 'div', id, className }) => {
  const Component = el
  const getString = UseString()
  return (
    <Component data-testid={id} className={className}>
      {getString(id)}
    </Component>
  )
}

export default Text