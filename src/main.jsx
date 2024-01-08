import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './Layout.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import {Home, About, Contact, Menu, PagenotFound} from './pages/index.js'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/menu',
        element: <Menu />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '*',
        element: <PagenotFound />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
