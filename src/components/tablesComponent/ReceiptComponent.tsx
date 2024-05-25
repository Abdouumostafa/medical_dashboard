import { user06 } from "../../imagesPath/imagesPath"
import { Link } from "react-router-dom"

const ReceiptComponent = () => {
  return (
    <>
      <tr>
        <td>R00001</td>
        <td>Andrea Lalema</td>
        <td className="table-image appoint-doctor">
          <img
            width={28}
            height={28}
            className="rounded-circle"
            src={user06}
            alt="#"
          />
          <h2>Dr.Jenny Smith</h2>
        </td>
        <td className="appoint-time">
          <span>12.05.2022 at </span>7.00 PM
        </td>
        <td className="text-end">
          <div className="dropdown dropdown-action">
            <Link
              to="#"
              className="action-icon dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fa fa-ellipsis-v" />
            </Link>
            <div className="dropdown-menu dropdown-menu-end">
              <Link
                className="dropdown-item"
                to="/appoinmentlist"
              >
                <i className="fa-solid fa-pen-to-square m-r-5" />{" "}
                Edit
              </Link>
              <Link
                className="dropdown-item"
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#delete_patient"
              >
                <i className="fa fa-trash-alt m-r-5"></i> Delete
              </Link>
            </div>
          </div>
        </td>
      </tr>
    </>
  )
}

export default ReceiptComponent