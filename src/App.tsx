import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import LoginPage from "./pages/login/LoginPage"
import { pathList } from "./routes/routesPaths"
import HomePage from "./pages/home/HomePage"
import PatientReports from "./pages/patients/PatientReports"
import CreateNewPatient from "./pages/patients/CreateNewPatient"
import AllPatients from "./pages/patients/AllPatients"
import EditPatient from "./pages/patients/EditPatient"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import CreateNewUser from "./pages/users/CreateNewUser"
import AllUsers from "./pages/users/AllUsers"
import UpdateUser from "./pages/users/UpdateUser"

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

      {/* Users */}
      <Route element={<CreateNewUser />} path={pathList.createUser} />
      <Route element={<AllUsers />} path={pathList.allUsers} />
      <Route element={<UpdateUser />} path={pathList.updateUser} />
    </>
  )
)
function App() {

  return <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
}

export default App