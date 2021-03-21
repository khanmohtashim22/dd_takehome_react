import React, { useState } from 'react'
import { 
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

import Routes from '../lib/Routes'
import UsernameContext from './support/UsernameContext'

const App = () => {
  const [user, setUser] = useState("")
  const usernameContext = { user, setUser }
  
  return (
    <Router>
      <UsernameContext.Provider value={usernameContext}>
        <Switch>
          {
            Routes.map((route, index) => {
              const { path, component } = route
              return <Route key={index} exact={true} path={path} component={component} />
            })
          }
        </Switch>
      </UsernameContext.Provider>
    </Router>
  )}

export default App
