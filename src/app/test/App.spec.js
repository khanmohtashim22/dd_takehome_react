import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import { rest } from 'msw'
import { setupServer } from 'msw/node'

import App from '../App'

const server = setupServer(
  rest.get('http://localhost:8080/api/rooms', (req, res, ctx) => {
    return res(ctx.json([{name: 'Tea Chats', id: 0}, { name: 'Coffee Chats', id: 1 }]))
  })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('should show error message if user tries to log in with invalid login', () => {
  const history = createMemoryHistory()
  render(
    <Router history={history}>
      <App />
    </Router>
  )
  fireEvent.submit(screen.getByTestId('login'))
  expect(screen.getByTestId('username.error')).toBeTruthy()
})

test('should clear the error message once valid username is entered', () => {
  const history = createMemoryHistory()
  render(
    <Router history={history}>
      <App />
    </Router>
  )
  fireEvent.submit(screen.getByTestId('login'))
  expect(screen.getByTestId('username.error')).toBeTruthy()
  fireEvent.change(screen.getByTestId('username'), { target: { value: 'm' } })
  expect(screen.queryByTestId('username.error')).toBeNull()
})

test('should be able to login with user and see chat', () => {
  const history = createMemoryHistory()
  render(
    <Router history={history}>
      <App />
    </Router>
  )

  fireEvent.change(screen.getByTestId('username'), { target: { value: 'moe' } })
  fireEvent.submit(screen.getByTestId('login'))
  expect(screen.getByTestId('user')).toBeTruthy()
})

test('should show user how long they have been logged in for', () => {
  jest.useFakeTimers()
  const history = createMemoryHistory()
  render(
    <Router history={history}>
      <App />
    </Router>
  )
  jest.advanceTimersByTime(60000)
  expect(screen.getByTestId('time')).toHaveTextContent('Online for 1 minutes')
  jest.useRealTimers()
})

test('should show rooms', async () => {
  const history = createMemoryHistory()
  render(
    <Router history={history}>
      <App />
    </Router>
  )
  await waitFor(() => screen.getByTestId('Tea Chats'))
  expect(screen.getByTestId('Tea Chats')).toBeTruthy()
  expect(screen.getByTestId('Coffee Chats')).toBeTruthy()
})
