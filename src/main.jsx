import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'remixicon/fonts/remixicon.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Page/Home'
import JobDetails from './components/Page/JobDetails/JobDetails'
import Applied from './components/Page/Applied'
import Blog from './components/Page/Blog'
import { getStore } from './utilities/storeData'
import Statistics from './components/Page/Statistics'
import ErrorPage from './components/Page/ErrorPage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "job/:id",
        element: <JobDetails/>
      },
      {
        path: "statistics",
        element: <Statistics/>
      },
      {
        path: "applied",
        element: <Applied/>,
        loader: () => getStore()
      },
      {
        path: "Blog",
        element: <Blog/>
      },
     
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
