import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './pages/Login.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './pages/Dashboard.jsx'
import Order from './pages/Order.jsx'

const router = createBrowserRouter([
  {
    path : '/',
    element : <Login/>
  },
  {
    path : '/dashboard',
    element : <Dashboard/>
  },
  {
    path : '/order',
    element : <Order/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
