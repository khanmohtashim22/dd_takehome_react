import LoginPage from '../pages/login-page/LoginPage'
import ChatPage from '../pages/chat-page/ChatPage'
import ErrorPage from '../pages/error-page/ErrorPage'

const Routes = [
  { path: '/', component: LoginPage },
  { path: '/chat', component: ChatPage },
  { path: '/error', component: ErrorPage }
]

export default Routes
