import { Link } from 'react-router-dom'

type IProps = {
  name: string,
  age: number,
  gender: string,
  document_number: number,
  onEditClick?: any,
  onDeleteClick?: any
}
const PatientsTable = ({ name, age, gender, document_number, onDeleteClick, onEditClick }: IProps) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{age}</td>
      <td>{gender}</td>
      <td className="appoint-time">
        <span>{document_number}</span>
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
              data-bs-target="#delete_patient"
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

export default PatientsTable