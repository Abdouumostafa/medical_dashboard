import UpdateExportComponent from "../../features/exports/components/UpdateExportComponent"
import BaseLayout from "../../layouts/BaseLayout"

const UpdateExport = () => {
  return (
    <>
      <BaseLayout />
      <div className="page-wrapper">
        <div className="content">
          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-body">
                  <UpdateExportComponent />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UpdateExport