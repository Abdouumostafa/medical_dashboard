import ReceiptComponent from "../../../components/tablesComponent/ReceiptComponent"
import { Link } from "react-router-dom"

const ReceiptsTable = () => {
  return (
    <div className="row">
      <div className="col-12 col-xl-12">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title d-inline-block">
              الاستلامات
            </h4>{" "}
            <Link
              to="/appoinmentlist"
              className="patient-views float-start"
            >
              عرض الكل
            </Link>
          </div>
          <div className="card-body p-0 table-dash">
            <div className="table-responsive">
              <table className="table mb-0 border-0 datatable custom-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>رقم الملف</th>
                    <th>تاريخ الاستلام</th>
                    <th>ملاحظات</th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  {
                    [1, 2, 3, 4, 5].map(() => {
                      return <ReceiptComponent
                        id={1243324}
                        receiving_date="19/2/2002"
                        document_number={123478}
                        notes="ملاحظات"
                      />
                    })
                  }
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