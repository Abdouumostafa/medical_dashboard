import CreateExportsComponent from "../../features/exports/components/CreateExportsComponent"
import BaseLayout from "../../layouts/BaseLayout"

const CreateExport = () => {
  return (
    <>
      <BaseLayout />
      <div className="page-wrapper">
        <div className="content">
          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-body">
                  <CreateExportsComponent />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>)
}

export default CreateExport