import UpdateUserForm from "../../features/users/components/UpdateUserForm"
import Navbar from "../../components/baseLayout/Navbar"
import Sidebar from "../../components/baseLayout/Sidebar"

const UpdateUser = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="page-wrapper">
        <div className="content">
          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-body">
                  <UpdateUserForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UpdateUser