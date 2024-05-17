import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import LoginPage from "./pages/login/LoginPage"
import { pathList } from "./routes/routesPaths"

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<LoginPage />} path={pathList.login} />
    </>
  )
)
function App() {

  return <>
    <RouterProvider router={router} />
  </>
}

export default App
