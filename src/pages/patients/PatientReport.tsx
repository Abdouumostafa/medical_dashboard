import PatientReportComponent from "../../features/patients/components/PatientReportComponent"
import BaseLayout from "../../layouts/BaseLayout"

const PatientReport = () => {
  return (
    <>
      <BaseLayout />
      <div className="page-wrapper">
        <div className="content">
          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-body">
                  <PatientReportComponent />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PatientReport