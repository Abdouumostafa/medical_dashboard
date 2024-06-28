import CreateReceiptComponent from "../../features/receipts/components/CreateReceiptComponent"
import BaseLayout from "../../layouts/BaseLayout"

const CreateReceipt = () => {
  return (
    <>
      <BaseLayout />
      <div className="page-wrapper">
        <div className="content">
          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-body">
                  <CreateReceiptComponent />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CreateReceipt