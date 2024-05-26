import BaseLayout from "../../layouts/BaseLayout"
import StatsBoxs from "../../features/home/components/StatsBoxs"
import ReceiptsTable from "../../features/receiptsTable/components/ReceiptsTable"
import DeleteModal from "../../components/DeleteModal"
import PatientsTable from "../../features/receiptsTable/components/PatientsTable"

const HomePage = () => {
  return (
    <>
      <BaseLayout />
      <div className="page-wrapper">
        <div className="content">
          <StatsBoxs />
          <ReceiptsTable />
          <PatientsTable />
        </div>
        <DeleteModal modalId="delete_receipt" />
        <DeleteModal modalId="delete_patient" />
      </div>
    </>
  )
}

export default HomePage