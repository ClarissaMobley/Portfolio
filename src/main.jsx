import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

import Error from './pages/Error.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Projects from './pages/Projects.jsx'
import Resume from './pages/Resume.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'About',
        element: <About />
      },
      {
        path: 'Projects',
        element: <Projects />
      },
      {
        path: 'Resume',
        element: <Resume />
      },
      {
        path: 'Contact',
        element: <Contact />
      },
    ],
    errorElement: <Error />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)


