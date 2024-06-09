import { useQuery } from "@tanstack/react-query"
import UsersTable from "./UsersTable"
import getAllUsers from "../services/gatAllUsers"
import Loading from "../../../components/Loading"

const AllUsersComponent = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['allUsers'],
    queryFn: getAllUsers
  })
  const userData = data?.data?.data

  console.log(userData)

  return (<>
    {isLoading ?
      <Loading />
      :
      <div className="row">
        <div className="col-12 col-xl-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title d-inline-block">
                جميع المستخدمين
              </h4>
            </div>
            <div className="card-body p-0 table-dash">
              <div className="table-responsive">
                <table className="table mb-0 border-0 datatable custom-table">
                  <thead>
                    <tr>
                      <th>الاسم</th>
                      <th>البريد الالكتروني</th>
                      <th>الاسم الوظيفي</th>
                      <th>رقم الهوية</th>
                      <th>الصلاحية</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      userData.map(({ pk, email, job_title, username, national_id, is_admin }: any) => {
                        return <UsersTable
                          key={pk}
                          username={username}
                          email={email}
                          national_id={national_id}
                          job_title={job_title}
                          is_admin={is_admin} />
                      })
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    }</>
  )
}

export default AllUsersComponent