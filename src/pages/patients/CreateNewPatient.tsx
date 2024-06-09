import CreatePatientForm from "../../features/patients/components/CreatePatientForm"
import BaseLayout from "../../layouts/BaseLayout"

const CreateNewPatient = () => {
  return (
    <>
      <BaseLayout />
      <div className="page-wrapper">
        <div className="content">
          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-body">
                  <CreatePatientForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CreateNewPatient