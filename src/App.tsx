import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import GitHubHomePage from './components/GitHubHomePage/GitHubHomePage'
import LandingPage from './components/LandingPage/LandingPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/user/:username',
    element: <GitHubHomePage />
  }
])

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App