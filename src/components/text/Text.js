import React from 'react'

import UseString from '../use-string/UseStrings'

const Text = ({ el = 'div', id }) => {
  const Component = el
  const getString = UseString()
  return (
    <Component>
      {getString(id)}
    </Component>
  )
}

export default Text