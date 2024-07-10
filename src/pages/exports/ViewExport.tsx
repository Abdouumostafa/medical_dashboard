import ViewExportComponent from "../../features/exports/components/ViewExportComponent"
import BaseLayout from "../../layouts/BaseLayout"

const ViewExport = () => {
  return (
    <>
      <BaseLayout />
      <div className="page-wrapper">
        <div className="content">
          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-body">
                  <ViewExportComponent />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>)
}

export default ViewExport