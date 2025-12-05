import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { LoginPage } from './pages/LoginPage.tsx'
import { HomePage } from './pages/HomePage.tsx'
import { DashboardPage } from './pages/DashboardPage.tsx'
import { AboutPage } from './pages/AboutPage.tsx'
import { MemberPage } from './pages/MemberPage.tsx'
import { AppLayout } from './components/layout/AppLayout.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
  },
  {
    element: <AppLayout/>,
    children: [
      {
        path: '/homepage',
        element: <HomePage />
      },
      {
        path: '/dashboard',
        element: <DashboardPage />
      },
      {
        path: '/about',
        element: <AboutPage />
      },
      {
        path: '/members',
        element: <MemberPage/>
      }
    ]
  },
])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
