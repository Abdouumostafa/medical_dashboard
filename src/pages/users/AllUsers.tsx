import AllUsersComponent from "../../features/users/components/AllUsersComponent"
import BaseLayout from "../../layouts/BaseLayout"

const AllUsers = () => {
  return (
    <>
      <BaseLayout />
      <div className="page-wrapper">
        <div className="content">
          <AllUsersComponent />
        </div>
      </div>
    </>
  )
}

export default AllUsers