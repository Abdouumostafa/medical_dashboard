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
import ProtectedRoutes from "./routes/ProtectedRoutes"
import AllExports from "./pages/exports/AllExports"
import CreateExport from "./pages/exports/CreateExport"
import UpdateExport from "./pages/exports/UpdateExport"
import CreateReceipt from "./pages/receipts/CreateReceipt"
import AllReceipts from "./pages/receipts/AllReceipts"
import UpdateReceipts from "./pages/receipts/UpdateReceipts"

const queryClient = new QueryClient()

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Login Page */}
      <Route element={<LoginPage />} path={pathList.login} />

      {/* Home Page */}
      <Route element={
        <ProtectedRoutes>
          <HomePage />
        </ProtectedRoutes>
      }
        path={pathList.homePage} />

      {/* Patients */}
      <Route element={
        <ProtectedRoutes>
          <PatientReports />
        </ProtectedRoutes>
      }
        path={pathList.patientReports} />

      <Route element={
        <ProtectedRoutes>
          <CreateNewPatient />
        </ProtectedRoutes>
      }
        path={pathList.createPatient} />

      <Route element={
        <ProtectedRoutes>
          <AllPatients />
        </ProtectedRoutes>
      }
        path={pathList.allPatients} />

      <Route element={
        <ProtectedRoutes>
          <EditPatient />
        </ProtectedRoutes>
      }
        path={pathList.editPatient} />


      {/* Users */}
      <Route element={
        <ProtectedRoutes>
          <CreateNewUser />
        </ProtectedRoutes>
      }
        path={pathList.createUser} />

      <Route element={
        <ProtectedRoutes>
          <AllUsers />
        </ProtectedRoutes>
      }
        path={pathList.allUsers} />

      <Route element={
        <ProtectedRoutes>
          <UpdateUser />
        </ProtectedRoutes>
      }
        path={pathList.updateUser} />

      {/* Exports */}
      <Route element={
        <ProtectedRoutes>
          <AllExports />
        </ProtectedRoutes>
      }
        path={pathList.allExports} />

      <Route element={
        <ProtectedRoutes>
          <CreateExport />
        </ProtectedRoutes>
      }
        path={pathList.createExports} />

      <Route element={
        <ProtectedRoutes>
          <UpdateExport />
        </ProtectedRoutes>
      }
        path={pathList.update_exports} />

      {/* Receipts */}
      <Route element={
        <ProtectedRoutes>
          <CreateReceipt />
        </ProtectedRoutes>
      }
        path={pathList.create_receipt} />

      <Route element={
        <ProtectedRoutes>
          <AllReceipts />
        </ProtectedRoutes>
      }
        path={pathList.all_receipts} />

      <Route element={
        <ProtectedRoutes>
          <UpdateReceipts />
        </ProtectedRoutes>
      }
        path={pathList.update_receipts} />
    </>
  )
)
function App() {

  return <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
}

export default App