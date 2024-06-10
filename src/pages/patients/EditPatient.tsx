import UpdatePatientComponent from "../../features/patients/components/UpdatePatientComponent";
import BaseLayout from "../../layouts/BaseLayout"

const EditPatient = () => {
  return (
    <>
      <BaseLayout />
      <div className="page-wrapper">
        <div className="content">
          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-body">
                  <UpdatePatientComponent />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EditPatient;