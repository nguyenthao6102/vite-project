import React from 'react'
import { useRoutes } from 'react-router-dom'
import Home from '@/pages/Home'
import Login from '@/pages/Login'

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/login',
      element: <Login />
    }
  ])
}
