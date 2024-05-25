import { Link } from "react-router-dom"
import BaseLayout from "../../layouts/BaseLayout"
import StatsBoxs from "../../features/home/components/StatsBoxs"
import ReceiptsTable from "../../features/receiptsTable/components/ReceiptsTable"
import DeleteModal from "../../components/DeleteModal"

const HomePage = () => {
  return (
    <>
      <BaseLayout />
      <div className="page-wrapper">
        <div className="content">
          <StatsBoxs />
          <ReceiptsTable />
          <div className="row">
            <div className="col-12 col-xl-12">
              <div className="card">
                <div className="card-header pb-0">
                  <h4 className="card-title d-inline-block">
                    Recent Patients{" "}
                  </h4>{" "}
                  <Link
                    to="/editpatients"
                    className="float-end patient-views"
                  >
                    Show all
                  </Link>
                </div>
                <div className="card-block table-dash">
                  <div className="table-responsive">
                    <table className="table mb-0 border-0 datatable custom-table">
                      <thead>
                        <tr>
                          <th>
                            <div className="form-check check-tables">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultValue="something"
                              />
                            </div>
                          </th>
                          <th>No</th>
                          <th>Patient name</th>
                          <th>Age</th>
                          <th>Date of Birth</th>
                          <th>Diagnosis</th>
                          <th>Triage</th>
                          <th />
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="form-check check-tables">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultValue="something"
                              />
                            </div>
                          </td>
                          <td>R00001</td>
                          <td className="table-image">
                            {/* <img
                                width={28}
                                height={28}
                                className="rounded-circle"
                                src={Avatar2}
                                alt="#"
                              /> */}
                            <h2>Andrea Lalema</h2>
                          </td>
                          <td>21</td>
                          <td>07 January 2002</td>
                          <td>Heart attack</td>
                          <td>
                            <button className="custom-badge status-green ">
                              Non Urgent
                            </button>
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
                                  to="/editpatients"
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
                        <tr>
                          <td>
                            <div className="form-check check-tables">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultValue="something"
                              />
                            </div>
                          </td>
                          <td>R00002</td>
                          <td className="table-image">
                            {/* <img
                                width={28}
                                height={28}
                                className="rounded-circle"
                                src={Avatar3}
                                alt="#"
                              /> */}
                            <h2>Mark Hay Smith</h2>
                          </td>
                          <td>23</td>
                          <td>06 January 2002</td>
                          <td>Jaundice</td>
                          <td>
                            <button className="custom-badge status-pink">
                              Emergency
                            </button>
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
                                  to="/editpatients"
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
                        <tr>
                          <td>
                            <div className="form-check check-tables">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultValue="something"
                              />
                            </div>
                          </td>
                          <td>R00003</td>
                          <td className="table-image">
                            {/* <img
                                width={28}
                                height={28}
                                className="rounded-circle"
                                src={Avatar4}
                                alt="#"
                              /> */}
                            <h2>Cristina Groves</h2>
                          </td>
                          <td>25</td>
                          <td>10 January 2002</td>
                          <td>Malaria</td>
                          <td>
                            <button className="custom-badge status-gray">
                              Out Patient
                            </button>
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
                                  to="/editpatients"
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
                        <tr>
                          <td>
                            <div className="form-check check-tables">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultValue="something"
                              />
                            </div>
                          </td>
                          <td>R00004</td>
                          <td className="table-image">
                            {/* <img
                                width={28}
                                height={28}
                                className="rounded-circle"
                                src={Avatar5}
                                alt="#"
                              /> */}
                            <h2>Galaviz Lalema</h2>
                          </td>
                          <td>21</td>
                          <td>09 January 2002</td>
                          <td>Typhoid</td>
                          <td>
                            <button className="custom-badge status-orange">
                              Non Urgent
                            </button>
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
                                  to="/editpatients"
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
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <DeleteModal modalId="" />
      </div>
    </>
  )
}

export default HomePage