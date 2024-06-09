import CreateNewUserForm from "../../features/users/components/CreateNewUserForm"
import BaseLayout from "../../layouts/BaseLayout"

const CreateNewUser = () => {
  return (
    <div>
      <BaseLayout />
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