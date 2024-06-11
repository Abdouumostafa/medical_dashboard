import BaseLayout from "../../layouts/BaseLayout"
import StatsBoxs from "../../features/home/components/StatsBoxs"
import ReceiptsTable from "../../features/receiptsTable/components/ReceiptsTable"
import DeleteModal from "../../components/DeleteModal"
import AllPatientsComponent from "../../features/patients/components/AllPatientsComponent"

const HomePage = () => {
  return (
    <>
      <BaseLayout />
      <div className="page-wrapper">
        <div className="content">
          <StatsBoxs />
          <ReceiptsTable />
          <AllPatientsComponent isHome={true} />
        </div>
        <DeleteModal modalId="delete_receipt" />
        <DeleteModal modalId="delete_patient" />
      </div>
    </>
  )
}

export default HomePage