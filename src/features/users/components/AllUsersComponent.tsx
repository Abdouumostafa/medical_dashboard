import UsersTable from "./UsersTable"

const AllUsersComponent = () => {
  return (
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
                    [1, 2, 3, 4, 5].map(() => {
                      return <UsersTable
                        username="ghkds"
                        email="akjds"
                        national_id="dcddss"
                        job_title="wedecf"
                        is_admin={true} />
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

export default AllUsersComponent