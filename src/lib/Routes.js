import Login from '../pages/login/Login'
import Chat from '../pages/chat/Chat'
import Error from '../pages/error/Error'

const Routes = [
  { path: '/', component: Login },
  { path: '/chat', component: Chat },
  { path: '/error', component: Error }
]

export default Routes
