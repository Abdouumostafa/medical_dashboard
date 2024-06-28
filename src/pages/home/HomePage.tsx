import BaseLayout from "../../layouts/BaseLayout"
import StatsBoxs from "../../features/home/components/StatsBoxs"
import DeleteModal from "../../components/DeleteModal"
import AllPatientsComponent from "../../features/patients/components/AllPatientsComponent"
import AllReceiptsComponent from "../../features/receipts/components/AllReceiptsComponent"

const HomePage = () => {
  return (
    <>
      <BaseLayout />
      <div className="page-wrapper">
        <div className="content">
          <StatsBoxs />
          <AllReceiptsComponent isHome={true} />
          <AllPatientsComponent isHome={true} />
        </div>
        <DeleteModal modalId="delete_receipt" />
        <DeleteModal modalId="delete_patient" />
      </div>
    </>
  )
}

export default HomePage