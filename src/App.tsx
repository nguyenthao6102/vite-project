import Router from '@/router'
import * as React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import './App.css'
import ScrollToTop from '@/router/ScrollToTop'

// Create a client
const queryClient = new QueryClient()

function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <ScrollToTop />
        <Router />
      </QueryClientProvider>
    </div>
  )
}

export default App
