import { user06 } from "../../../imagesPath/imagesPath"
import PatientComponent from "../../../components/tablesComponent/PatientComponent"
import { Link } from "react-router-dom"
import { pathList } from "../../../routes/routesPaths"

const PatientsTable = () => {
  return (
    <div className="row">
      <div className="col-12 col-xl-12">
        <div className="card">
          <div className="card-header pb-0">
            <h4 className="card-title d-inline-block">
              المرضى{" "}
            </h4>{" "}
            <Link
              to={pathList.allPatients}
              className="float-start patient-views"
            >
              عرض الكل
            </Link>
          </div>
          <div className="card-block table-dash">
            <div className="table-responsive">
              <table className="table mb-0 border-0 datatable custom-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>الاسم</th>
                    <th>العمر</th>
                    <th>الجنس</th>
                    <th>رقم الملف</th>
                    <th>تاريخ استلام الطلب</th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  {
                    [1, 2, 3, 4, 5].map(() => {
                      return <PatientComponent
                        id={3245}
                        image={user06}
                        name="اسم المريض"
                        age={22}
                        gander={'ذكر'}
                        document_number={31243}
                        received_order_date="19/2/2002"
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

export default PatientsTable