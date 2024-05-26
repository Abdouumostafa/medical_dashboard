import { Link } from "react-router-dom"

type IProps = {
  id: number,
  document_number: number,
  receiving_date: string,
  notes: string,
  editClick?: any,
}

const ReceiptComponent = ({ id, document_number, receiving_date, notes, editClick }: IProps) => {
  return (
    <>
      <tr>
        <td>{id}</td>
        <td>{document_number}</td>
        <td className="appoint-time">
          <span>{receiving_date}</span>
        </td>
        <td className="table-image appoint-doctor">
          <h2>{notes}</h2>
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
      </tr>
    </>
  )
}

export default ReceiptComponent