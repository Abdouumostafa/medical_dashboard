import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import LoginPage from "./pages/login/LoginPage"
import { pathList } from "./routes/routesPaths"
import HomePage from "./pages/home/HomePage"

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<LoginPage />} path={pathList.login} />
      <Route element={<HomePage />} path={pathList.homePage} />
    </>
  )
)
function App() {

  return <>
    <RouterProvider router={router} />
  </>
}

export default App
