import { Link } from "react-router-dom"

type IProps = {
  receiver_name: string,
  date: string,
  invoice_date: string,
  orders: any,
  onEditClick: any,
  onDeleteClick: any,
  onViewClick: any
}
const ExportsTable = ({ receiver_name, date, invoice_date, onDeleteClick,
  onEditClick, onViewClick, orders
}: IProps) => {
  return (
    <tr>
      <td>{receiver_name}</td>
      <td>{date}</td>
      <td>{invoice_date}</td>
      <td>{orders}</td>
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
            <Link
              className="dropdown-item"
              to="#"
              onClick={onViewClick}
            >
              <i className="fa-regular fa-file m-r-5"></i> عرض
            </Link>
          </div>
        </div>
      </td>
    </tr>
  )
}

export default ExportsTable