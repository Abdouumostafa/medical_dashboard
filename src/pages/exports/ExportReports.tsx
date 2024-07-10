import ExportReportsComponent from "../../features/exports/components/ExportReportsComponent"
import BaseLayout from "../../layouts/BaseLayout"

const ExportReports = () => {
  return (
    <>
      <BaseLayout />
      <div className="page-wrapper">
        <div className="content">
          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-body">
                  <ExportReportsComponent />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>)
}

export default ExportReports