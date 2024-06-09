import DeleteModal from "../../../components/DeleteModal"
import Loading from "@/components/Loading"
import { ToastContainer } from "react-toastify"
import PatientsTable from "./PatientsTable"

const AllPatientsComponent = () => {
  return (<>
    {/* {isLoading ?
      <Loading />
      : */}
    <div className="row">
      <ToastContainer />
      <div className="col-12 col-xl-12">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title d-inline-block">
              جميع المرضى
            </h4>
          </div>
          <div className="card-body p-0 table-dash">
            <div className="table-responsive">
              <table className="table mb-0 border-0 datatable custom-table">
                <thead>
                  <tr>
                    <th>الاسم</th>
                    <th>العمر</th>
                    <th>النوع</th>
                    <th>رقم الملف</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    [32, 32, 32324, 32].map(({ pk, email, job_title, username, national_id, is_admin }: any) => {
                      return <PatientsTable
                        key={'pk'}
                        name={'username'}
                        age={'email'}
                        document_number={'national_id'}
                        gender={'job_title'}
                      // onDeleteClick={() => setGlobalId(pk)}
                      // onEditClick={() => navigation(`/home/update_user/${pk}`)}
                      />
                    })
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <DeleteModal
        modalId="delete_patient"
      // onDeletionAction={() => deleteUserMutation.mutate()}
      />
    </div>
    {/* } */}
  </>
  )
}

export default AllPatientsComponent