import Strings from '../../lib/Strings'

const UseString = () => {
  const getString = id => Strings[id] || ''
  return getString 
}

export default UseString