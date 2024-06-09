import CreateNewUserForm from "../../features/users/components/CreateNewUserForm"
import Navbar from "../../components/baseLayout/Navbar"
import Sidebar from "../../components/baseLayout/Sidebar"

const CreateNewUser = () => {
  return (
    <div>
      <Navbar />
      <Sidebar id='menu-item6' id1='menu-items6' activeClassName='add-department' />
      <>
        <div className="page-wrapper">
          <div className="content">
            <div className="row">
              <div className="col-sm-12">
                <div className="card">
                  <div className="card-body">
                    <CreateNewUserForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>

    </div>
  )
}

export default CreateNewUser