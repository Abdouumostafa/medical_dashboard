import PatientDetailsComponent from "../../features/search/components/PatientDetailsComponent"
import BaseLayout from "../../layouts/BaseLayout"

const PatientDetails = () => {
  return (
    <>
      <BaseLayout />
      <div className="page-wrapper">
        <div className="content">
          <PatientDetailsComponent />
        </div>
      </div>
    </>
  )
}

export default PatientDetails