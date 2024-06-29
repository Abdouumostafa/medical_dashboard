import UpdateReceiptComponent from "../../features/receipts/components/UpdateReceiptComponent"
import BaseLayout from "../../layouts/BaseLayout"

const UpdateReceipts = () => {
  return (
    <>
      <BaseLayout />
      <div className="page-wrapper">
        <div className="content">
          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-body">
                  <UpdateReceiptComponent />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UpdateReceipts