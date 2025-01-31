import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './Layout/AppLayout'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <About/>
      },
      {
        path: '/contact',
        element: <Contact />
      },
    ]
  }
])

function App() {
  return (
    <>
      < RouterProvider router={router}/>
    </>
  )
}

export default App
 