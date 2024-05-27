import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import LoginPage from "./pages/login/LoginPage"
import { pathList } from "./routes/routesPaths"
import HomePage from "./pages/home/HomePage"
import PatientReports from "./pages/patients/PatientReports"
import CreateNewPatient from "./pages/patients/CreateNewPatient"
import AllPatients from "./pages/patients/AllPatients"

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Login Page */}
      <Route element={<LoginPage />} path={pathList.login} />

      {/* Home Page */}
      <Route element={<HomePage />} path={pathList.homePage} />

      {/* Patients */}
      <Route element={<PatientReports />} path={pathList.patientReports} />
      <Route element={<CreateNewPatient />} path={pathList.createPatient} />
      <Route element={<AllPatients />} path={pathList.allPatients} />
    </>
  )
)
function App() {

  return <>
    <RouterProvider router={router} />
  </>
}

export default App
