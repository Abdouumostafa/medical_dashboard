import { Link } from "react-router-dom"

type IProps = {
  id: number,
  image: any,
  name: string,
  age: number,
  gander: string,
  document_number: number,
  received_order_date: string
}

const PatientComponent = ({ id, image, name, age, gander, document_number, received_order_date }: IProps) => {
  return (
    <tr>
      <td>{id}</td>
      <td className="table-image">
        <img
          width={28}
          height={28}
          className="rounded-circle"
          src={image}
          alt="#"
        />
        <h2>{name}</h2>
      </td>
      <td>{age}</td>
      <td>{gander}</td>
      <td>{document_number}</td>
      <td>{received_order_date}</td>
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
              to="/editpatients"
            >
              <i className="fa-solid fa-pen-to-square m-r-5" />{" "}
              تعديل
            </Link>
            <Link
              className="dropdown-item"
              to="#"
              data-bs-toggle="modal"
              data-bs-target="#delete_patient"
            >
              <i className="fa fa-trash-alt m-r-5"></i> حذف
            </Link>
          </div>
        </div>
      </td>
    </tr>
  )
}

export default PatientComponent