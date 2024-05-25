import ReceiptComponent from "../../../components/tablesComponent/ReceiptComponent"
import { Link } from "react-router-dom"

const ReceiptsTable = () => {
  return (
    <div className="row">
      <div className="col-12 col-xl-12">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title d-inline-block">
              Upcoming Appointments
            </h4>{" "}
            <Link
              to="/appoinmentlist"
              className="patient-views float-start"
            >
              Show all
            </Link>
          </div>
          <div className="card-body p-0 table-dash">
            <div className="table-responsive">
              <table className="table mb-0 border-0 datatable custom-table">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Patient name</th>
                    <th>Doctor</th>
                    <th>Time</th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  <ReceiptComponent />
                  <ReceiptComponent />
                  <ReceiptComponent />
                  <ReceiptComponent />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReceiptsTable