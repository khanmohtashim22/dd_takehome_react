import React, { useState } from 'react'
import { 
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

import Routes from '../lib/Routes'
import UserContext from './support/UserContext'

const App = () => {
  const [user, setUser] = useState("")
  const userContext = { user, setUser }
  
  return (
    <Router>
      <UserContext.Provider value={userContext}>
        <Switch>
          {
            Routes.map((route, index) => {
              const { path, component } = route
              return <Route key={index} exact={true} path={path} component={component} />
            })
          }
        </Switch>
      </UserContext.Provider>
    </Router>
  )}

export default App
