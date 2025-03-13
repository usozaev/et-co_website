import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { TeamPage } from './pages/Team.page'
import { NewsPage } from './pages/News.page'
import { Layout } from './components/Layout/Layout'
import { HomePage } from './pages/Home.page'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <HomePage />,
            },
            {
                path: '/news',
                element: <NewsPage />,
            },
            {
                path: '/team',
                element: <TeamPage />,
            },
        ],
    },
])

export function Router() {
    return <RouterProvider router={router} />
}
