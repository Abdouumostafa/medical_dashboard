import AllPatientsReportComponent from "../../features/patients/components/AllPatientsReportComponent"
import BaseLayout from "../../layouts/BaseLayout"

const PatientReports = () => {
  return (
    <>
      <BaseLayout />
      <div className="page-wrapper">
        <div className="content">
          <AllPatientsReportComponent />
        </div>
      </div>
    </>
  )
}

export default PatientReports