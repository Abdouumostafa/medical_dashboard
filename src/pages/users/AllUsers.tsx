import AllUsersComponent from "../../features/users/components/AllUsersComponent"
import Navbar from "../../components/baseLayout/Navbar"
import Sidebar from "../../components/baseLayout/Sidebar"

const AllUsers = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="page-wrapper">
        <div className="content">
          <AllUsersComponent />
        </div>
      </div>
    </>
  )
}

export default AllUsers