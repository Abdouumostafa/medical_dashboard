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
          <div className="custom-badge status-green ">
            ادمن
          </div>
          :
          <div className="custom-badge status-pink ">
            موظف
          </div>
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
            <button
              className="dropdown-item"
              onClick={onEditClick}
            >
              <i className="fa-solid fa-pen-to-square m-r-5" />{" "}
              تعدبل
            </button>
            <Link
              className="dropdown-item"
              to="#"
              data-bs-toggle="modal"
              data-bs-target="#delete_user"
              onClick={onDeleteClick}
            >
              <i className="fa fa-trash-alt m-r-5"></i> حذف
            </Link>
          </div>
        </div>
      </td>
    </tr>
  )
}

export default UsersTable