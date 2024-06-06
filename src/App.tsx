import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import LoginPage from "./pages/login/LoginPage"
import { pathList } from "./routes/routesPaths"
import HomePage from "./pages/home/HomePage"
import PatientReports from "./pages/patients/PatientReports"
import CreateNewPatient from "./pages/patients/CreateNewPatient"
import AllPatients from "./pages/patients/AllPatients"
import EditPatient from "./pages/patients/EditPatient"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient()

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
      <Route element={<EditPatient />} path={pathList.editPatient} />
    </>
  )
)
function App() {

  return <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
}

export default App