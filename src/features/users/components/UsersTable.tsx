import { Link } from "react-router-dom"

type IProps = {
  username: string,
  email: string,
  job_title: string,
  national_id: string,
  is_admin: boolean,
  onEditClick?: any,
  onDeleteClick?: any
}

const UsersTable = ({ username, email, job_title, national_id, is_admin, onDeleteClick, onEditClick }: IProps) => {
  return (
    <tr>
      <td>{username}</td>
      <td>{email}</td>
      <td>{job_title}</td>
      <td className="appoint-time">
        <span>{national_id}</span>
      </td>
      <td>
        {is_admin === true ?
          <button className="custom-badge status-green ">
            ادمن
          </button>
          :
          <button className="custom-badge status-pink ">
            موظف
          </button>
        }
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
              تعدبل
            </Link>
            <Link
              className="dropdown-item"
              to="#"
              data-bs-toggle="modal"
              data-bs-target="#delete_receipt"
            >
              <i className="fa fa-trash-alt m-r-5"></i> حذف
            </Link>
          </div>
        </div>
      </td>
    </tr>)
}

export default UsersTable