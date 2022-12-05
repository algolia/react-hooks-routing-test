// React related
import { Suspense } from 'react'

// Routing
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Algolia
import WithInstantsearch from './WithInstantsearch'

// Pages
import SearchPage from './SearchPage'

function Main() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <Suspense fallback={<></>}>
          <SearchPage />
        </Suspense>
      ),
    },
  ])

  return (
    <>
      <WithInstantsearch>
        <RouterProvider router={router} />
      </WithInstantsearch>
    </>
  )
}

export default Main
