import AllExportsComponent from "../../features/exports/components/AllExportsComponent"
import BaseLayout from "../../layouts/BaseLayout"

const AllExports = () => {
  return (
    <>
      <BaseLayout />
      <div className="page-wrapper">
        <div className="content">
          <AllExportsComponent />
        </div>
      </div>
    </>
  )
}

export default AllExports