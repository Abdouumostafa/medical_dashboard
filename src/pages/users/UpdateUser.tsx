import UpdateUserForm from "../../features/users/components/UpdateUserForm"
import BaseLayout from "../../layouts/BaseLayout"

const UpdateUser = () => {
  return (
    <>
      <BaseLayout />
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