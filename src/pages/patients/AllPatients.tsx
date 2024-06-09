import AllPatientsComponent from "../../features/patients/components/AllPatientsComponent"
import BaseLayout from "../../layouts/BaseLayout"

const AllPatients = () => {
  return (
    <>
      <BaseLayout />
      <div className="page-wrapper">
        <div className="content">
          <AllPatientsComponent />
        </div>
      </div>
    </>
  )
}

export default AllPatients