import AllReceiptsComponent from "../../features/receipts/components/AllReceiptsComponent"
import BaseLayout from "../../layouts/BaseLayout"

const AllReceipts = () => {
  return (
    <>
      <BaseLayout />
      <div className="page-wrapper">
        <div className="content">
          <AllReceiptsComponent />
        </div>
      </div>
    </>
  )
}

export default AllReceipts